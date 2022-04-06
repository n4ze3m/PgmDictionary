import { Avatar, Card, createStyles, Group, Text } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontSize: "30px",
        fontWeight: "bold",
        fontFamily: 'Montserrat'
    },

    definition: {
        fontFamily: 'Montserrat'
    },

    example: {
        fontStyle: "italic",
        fontFamily: 'Montserrat'
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
    slug: string
}


export default function ProfileWordCard(props: WordCardProps) {
    const { classes, theme } = useStyles();
    return (
        <Card withBorder shadow="md" p="lg" radius="md" className={classes.card} mb="md">
            <Link href={`/define/${props.slug}`}>
                <Text size="xl" href={`/define/${props.slug}`} variant="link" component="a" className={classes.title} mt="xs">
                    {props.word}
                </Text>
            </Link>
            <Text size="sm" lineClamp={4} className={classes.definition} mt="md">
                {props.definition}
            </Text>
            <Text size="sm" lineClamp={4} className={classes.example} mt="md">
                {props.example}
            </Text>
            <Group mt="md" position="right" >
                
            </Group>
        </Card>
    )
}