import { Container, Grid } from "@mantine/core";
import WordCard from "../Common/WordCard";
import DefineCard from "./DefineCard";

export default function HomeBody() {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col xs={8}>
                    <WordCard />
                    <WordCard />
                    <WordCard />
                </Grid.Col>
                <Grid.Col xs={4}>
                    <DefineCard />
                </Grid.Col>
            </Grid>
        </Container>
    )
}