import { gql } from "urql";

export const addWordToDictionary = gql`
mutation AddWordToDictionary($wtodInput: dictionaryInsertInput!) {
  insertIntodictionaryCollection(objects: [$wtodInput]) {
    affectedCount
    records {
      id
    }
  }
}
`