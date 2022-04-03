import { Card, createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },
}));


export default function WordCard() {
    const { classes, theme } = useStyles();
    return (
        <Card withBorder shadow="md" p="lg" radius="md" className={classes.card} mb="md">
            <Text weight={800} size="lg" className={classes.title} mt="xs">
                Lorem ipsum dolor sit amet
            </Text>
            <Text size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
            </Text>
        </Card>
    )
}