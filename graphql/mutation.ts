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

export const deleteWordFromDictionary = gql`
mutation DeleteWordFromDic($id: String!) {
  deleteFromdictionaryCollection(atMost: 1, filter: {id: {eq: $id}}) {
    affectedCount
    records {
      id
    }
  }
}
`