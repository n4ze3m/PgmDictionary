import { Button, Paper, Text } from "@mantine/core";

export default function DefineCard() {
    return (
        <Paper withBorder shadow="md" p={30} radius="md">
            <Text size="xl" weight={800} mt="md" mb="md">
                {"<PgmDictionary />"}
            </Text>
            <Button color="teal" mt="md" mb="md">
                Define a word
            </Button>
        </Paper>
    )
}