import { Button, Paper, Text } from "@mantine/core";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";

export default function DefineCard() {

    const router = useRouter()
    const { user } = Auth.useUser();


    return (
        <Paper withBorder shadow="md" p={30} radius="md">
            <Text size="xl" weight={800} mt="md" mb="md">
                {"<PgmDictionary />"}
            </Text>
            <Button onClick={() => user ? router.push("/create") : router.push("/auth")} color="teal" mt="md" mb="md">
                Define a word
            </Button>
        </Paper>
    )
}