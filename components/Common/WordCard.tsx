import { Avatar, Card, createStyles, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontSize: "30px",
        fontWeight: "bold",
    },

    definition: {
        fontSize: "18px",
        fontWeight: "600",
    },

    example: {
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "italic",
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },
}));

interface WordCardProps {
    word: string;
    definition: string;
    example: string | null;
    username: string;
}


export default function WordCard(props: WordCardProps) {
    const { classes, theme } = useStyles();
    return (
        <Card withBorder shadow="md" p="lg" radius="md" className={classes.card} mb="md">
            <Text size="xl" className={classes.title} mt="xs">
                {props.word}
            </Text>
            <Text size="sm" lineClamp={4} className={classes.definition} mt="md">
                {props.definition}
            </Text>
            <Text size="sm" lineClamp={4} className={classes.example} mt="md">
                {props.example}
            </Text>
            <Group mt="md" position="right" >
                <Avatar size="xs" src={`https://gas-k8kp.onrender.com/avatar?n=${props.username}`} radius="xl" />
                <Text size="xs">
                    {props.username}
                </Text>
            </Group>
        </Card>
    )
}