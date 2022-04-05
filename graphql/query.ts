import { gql } from "urql";


export const homeDicQuery = gql`
query HomeWords($after: Cursor) {
  feed: dictionaryCollection(
    first: 15,
    orderBy:[{created_at: DescNullsLast}],
    after:$after
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        word
        definition
        slug
        example
        profile {
          username
        }
      }
    }
  }
}`

export const defineWordBySlug = gql`
query GetWordBySlug($after: Cursor, $slug: String!) {
  feed: dictionaryCollection(
    first: 15,
    orderBy:[{created_at: DescNullsLast}],
    after:$after,
    filter:{
      slug:{
        eq:$slug
      }
    }
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        word
        definition
        slug
        example
        profile {
          username
        }
      }
    }
  }
}
`