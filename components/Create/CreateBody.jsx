import {
  Button,
  Container,
  createStyles,
  Paper,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";

import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { addWordToDictionary } from "../../graphql/mutation";
import { useMutation } from "urql";
import { useEffect } from "react";
import { useForm } from "@mantine/form";
import slugify from "slugify";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export default function CreateBody() {
  const { classes } = useStyles();
  const session = Auth.useUser();
  const [createWtDMutation, createWtD] = useMutation(addWordToDictionary);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      word: "",
      definiation: "",
      example: "",
    },
    validate: (value) => ({
      example: !value.example.includes(value.word)
        ? "Example must contain " + value.word
        : null,
    }),
  });

  useEffect(() => {
    if (session.user === null) {
      router.replace("/auth");
    }
  }, []);

  return (
    <Container my={30}>
      <Text className={classes.title} align="center">
        New word
      </Text>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form
          onSubmit={form.onSubmit(async (values) => {
            let { definiation, example, word } = values;
            let slug = slugify(word, {
              trim: true,
              lower: true,
            });
            createWtD({
              wtodInput: {
                word,
                definition: definiation,
                example,
                slug,
                user_id: session.user.id,
              },
            })
              .then(() => {
                form.reset();
              })
              .catch(console.log);
          })}
        >
          <TextInput
            placeholder="Word"
            required
            {...form.getInputProps("word")}
          />
          <Textarea
            placeholder="Type your definiation here..."
            required
            mt="lg"
            {...form.getInputProps("definiation")}
          />
          <Textarea
            mt="lg"
            placeholder="Type your example here..."
            required
            {...form.getInputProps("example")}
          />
          <Text size="xs" mt="sm">
            Currently there is no approval process for words. Once you submit
            your word, it will be added to the dictionary.
          </Text>
          <Button type="submit" color="teal" fullWidth mt="lg">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
