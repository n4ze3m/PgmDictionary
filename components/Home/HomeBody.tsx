import { Container, Grid, Loader } from "@mantine/core";
import { useState } from "react";
import { homeDicQuery } from "../../graphql/query";
import WordCard from "../Common/WordCard";
import DefineCard from "./DefineCard";
import { usePaginatedQuery } from "../../lib/use-paginated-query"


export default function HomeBody() {
    const [lastCursor, setLastCursor] = useState<string | undefined>(
        undefined
    );

    const [homeQuery] = usePaginatedQuery({
        query: homeDicQuery,
        variables: {
            after: lastCursor,
        },
        mergeResult(oldData, newData) {
            return {
                ...oldData,
                ...newData,
                feed: {
                    ...oldData.feed!,
                    ...newData.feed!,
                    edges: [...oldData.feed!.edges, ...newData.feed!.edges],
                },
            };
        },
    });
    return (
        <Container my="md">
            <Grid>
                <Grid.Col xs={8}>
                    {
                        homeQuery.fetching ? <Loader color="teal" variant="bars" /> : null
                    }
                    {
                        homeQuery?.data?.feed?.edges.map((edge: any) => (
                            <WordCard
                                key={edge.node?.id}
                                word={edge.node?.word}
                                definition={edge.node?.definition}
                                example={edge.node?.example}
                                username={edge.node?.profile?.username}
                                slug={edge.node?.slug}
                            />
                        ))}
                </Grid.Col>
                <Grid.Col xs={4}>
                    <DefineCard />
                </Grid.Col>
            </Grid>
        </Container>
    )
}
