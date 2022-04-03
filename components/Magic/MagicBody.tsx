import { Button, Card, Center, Container, createStyles, Group, Paper, Text, TextInput } from "@mantine/core";


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 26,
        fontWeight: 900,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

export default function MagicBody() {
    const { classes } = useStyles();

    return (
        <Container size={460} my={30}>
            <Text className={classes.title} align="center">
                SignIn via Magic Link
            </Text>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput label="Email" placeholder="abc@example.com" required />
                <Group position="right" mt="lg" className={classes.controls}>
                <Button  color="teal" className={classes.control}>
                    Send Magic Link
                </Button>
                </Group>
            </Paper>
        </Container>
    )
}