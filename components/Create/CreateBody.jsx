import {
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Group,
  Paper,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";

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
  return (
    <Container my={30}>
      <Text className={classes.title} align="center">
        New word
      </Text>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput placeholder="Word" required />
        <Textarea
          placeholder="Type your definiation here..."
          required
          mt="lg"
        />
        <Textarea mt="lg" placeholder="Type your example here..." required />
        <Text size="xs" mt="sm">
            Currently there is no approval process for words. Once you submit your word, it will be added to the dictionary.
        </Text>
        <Button color="teal" fullWidth mt="lg">
            Submit
        </Button>
      </Paper>
    </Container>
  );
}
