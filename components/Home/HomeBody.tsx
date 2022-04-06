import { Button, Center, Container, Grid, Loader, Text } from "@mantine/core";
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
                        homeQuery?.data?.feed?.edges.length > 0 ? homeQuery?.data?.feed?.edges.map((edge: any) => (
                            <WordCard
                                key={edge.node?.id}
                                word={edge.node?.word}
                                definition={edge.node?.definition}
                                example={edge.node?.example}
                                username={edge.node?.profile?.username}
                                slug={edge.node?.slug}
                            />
                        )) : !homeQuery.fetching ? <Center>
                            <Text>
                                {"It seems that there is no word in the dictionary. Please add some words."}
                            </Text>
                        </Center> : null
                    }

                    {
                        homeQuery.fetching && <Center>
                            <Loader color="teal" variant="bars" />
                        </Center>
                    }
                    {
                        homeQuery.data?.feed?.pageInfo.hasNextPage && <Center><Button m="md" color="teal" onClick={() => {
                            setLastCursor(
                                homeQuery.data?.feed?.pageInfo.endCursor ?? undefined
                            );
                        }}> Load More</Button></Center>
                    }
                </Grid.Col>
                <Grid.Col xs={4}>
                    <DefineCard />
                </Grid.Col>
            </Grid>
        </Container>
    )
}
