import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFromdictionaryCollection: DictionaryDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Adds one or more `dictionaryInsertResponse` records to the collection */
  insertIntodictionaryCollection?: Maybe<DictionaryInsertResponse>;
  /** Adds one or more `profilesInsertResponse` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Updates zero or more records in the collection */
  updatedictionaryCollection: DictionaryUpdateResponse;
  /** Updates zero or more records in the collection */
  updateprofilesCollection: ProfilesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdictionaryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<DictionaryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodictionaryCollectionArgs = {
  objects: Array<DictionaryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatedictionaryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<DictionaryFilter>;
  set: DictionaryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `dictionary` */
  dictionaryCollection?: Maybe<DictionaryConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
};


/** The root type for querying data */
export type QueryDictionaryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<DictionaryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DictionaryOrderBy>>;
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Dictionary = {
  __typename?: 'dictionary';
  created_at?: Maybe<Scalars['Datetime']>;
  definition?: Maybe<Scalars['String']>;
  dislike?: Maybe<Scalars['BigInt']>;
  example?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  like?: Maybe<Scalars['BigInt']>;
  slug?: Maybe<Scalars['String']>;
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']>;
  word?: Maybe<Scalars['String']>;
};

export type DictionaryConnection = {
  __typename?: 'dictionaryConnection';
  edges: Array<DictionaryEdge>;
  pageInfo: PageInfo;
};

export type DictionaryDeleteResponse = {
  __typename?: 'dictionaryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dictionary>;
};

export type DictionaryEdge = {
  __typename?: 'dictionaryEdge';
  cursor: Scalars['String'];
  node?: Maybe<Dictionary>;
};

export type DictionaryFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  definition?: InputMaybe<StringFilter>;
  dislike?: InputMaybe<BigIntFilter>;
  example?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  like?: InputMaybe<BigIntFilter>;
  slug?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UuidFilter>;
  word?: InputMaybe<StringFilter>;
};

export type DictionaryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  definition?: InputMaybe<Scalars['String']>;
  dislike?: InputMaybe<Scalars['BigInt']>;
  example?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  like?: InputMaybe<Scalars['BigInt']>;
  slug?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
  word?: InputMaybe<Scalars['String']>;
};

export type DictionaryInsertResponse = {
  __typename?: 'dictionaryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dictionary>;
};

export type DictionaryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  definition?: InputMaybe<OrderByDirection>;
  dislike?: InputMaybe<OrderByDirection>;
  example?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  like?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  word?: InputMaybe<OrderByDirection>;
};

export type DictionaryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  definition?: InputMaybe<Scalars['String']>;
  dislike?: InputMaybe<Scalars['BigInt']>;
  example?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  like?: InputMaybe<Scalars['BigInt']>;
  slug?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
  word?: InputMaybe<Scalars['String']>;
};

export type DictionaryUpdateResponse = {
  __typename?: 'dictionaryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Dictionary>;
};

export type Profiles = {
  __typename?: 'profiles';
  avatar_url?: Maybe<Scalars['String']>;
  dictionaryCollection?: Maybe<DictionaryConnection>;
  id: Scalars['UUID'];
  updated_at?: Maybe<Scalars['Datetime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type ProfilesDictionaryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<DictionaryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DictionaryOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'profilesEdge';
  cursor: Scalars['String'];
  node?: Maybe<Profiles>;
};

export type ProfilesFilter = {
  avatar_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQueryQuery = { __typename?: 'Query', dictionaryCollection?: { __typename?: 'dictionaryConnection', edges: Array<{ __typename?: 'dictionaryEdge', node?: { __typename?: 'dictionary', id: any, word?: string | null, definition?: string | null } | null }> } | null };


export const HomeQueryDocument = gql`
    query HomeQuery {
  dictionaryCollection {
    edges {
      node {
        id
        word
        definition
      }
    }
  }
}
    `;

/**
 * __useHomeQueryQuery__
 *
 * To run a query within a React component, call `useHomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQueryQuery(baseOptions?: Apollo.QueryHookOptions<HomeQueryQuery, HomeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeQueryQuery, HomeQueryQueryVariables>(HomeQueryDocument, options);
      }
export function useHomeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQueryQuery, HomeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeQueryQuery, HomeQueryQueryVariables>(HomeQueryDocument, options);
        }
export type HomeQueryQueryHookResult = ReturnType<typeof useHomeQueryQuery>;
export type HomeQueryLazyQueryHookResult = ReturnType<typeof useHomeQueryLazyQuery>;
export type HomeQueryQueryResult = Apollo.QueryResult<HomeQueryQuery, HomeQueryQueryVariables>;