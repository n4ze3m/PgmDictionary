import { Button, Paper, Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function DefineCard() {

    const router = useRouter()



    return (
        <Paper withBorder shadow="md" p={30} radius="md">
            <Text size="xl" weight={800} mt="md" mb="md">
                {"<PgmDictionary />"}
            </Text>
            <Button onClick={() => router.push("/create")} color="teal" mt="md" mb="md">
                Define a word
            </Button>
        </Paper>
    )
}