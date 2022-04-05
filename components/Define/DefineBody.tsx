import { Center, Container, Grid, Loader, Text } from "@mantine/core";
import { useState } from "react";
import { defineWordBySlug } from "../../graphql/query";
import WordCard from "../Common/WordCard";
import DefineCard from "../Home/DefineCard";
import { usePaginatedQuery } from "../../lib/use-paginated-query"

interface IDefineProps {
    slug: string;
}

export default function DefineBody(props: IDefineProps) {
    const [lastCursor, setLastCursor] = useState<string | undefined>(
        undefined
    );

    const [slugQuery] = usePaginatedQuery({
        query: defineWordBySlug,
        variables: {
            after: lastCursor,
            slug: props.slug,
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
                        slugQuery.fetching ? <Center>
                            <Loader color="teal" variant="bars" />
                        </Center> : slugQuery?.data?.feed?.edges.length > 0 ? slugQuery?.data?.feed?.edges.map((edge: any) => (
                            <WordCard
                                key={edge.node?.id}
                                word={edge.node?.word}
                                definition={edge.node?.definition}
                                example={edge.node?.example}
                                username={edge.node?.profile?.username}
                                slug={edge.node?.slug}
                            />
                        )) : <Center>
                            <Text>
                                Oh no! I can't find the word you are looking for. Maybe one day someone will add it.
                            </Text>
                        </Center>
                    }
                </Grid.Col>
                <Grid.Col xs={4}>
                    <DefineCard />
                </Grid.Col>
            </Grid>
        </Container>
    )
}