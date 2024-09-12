import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aavegotchi = {
  __typename?: 'Aavegotchi';
  back?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  left?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  svg: Scalars['String']['output'];
};

export type Aavegotchi_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Aavegotchi_Filter>>>;
  back?: InputMaybe<Scalars['String']['input']>;
  back_contains?: InputMaybe<Scalars['String']['input']>;
  back_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  back_ends_with?: InputMaybe<Scalars['String']['input']>;
  back_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  back_gt?: InputMaybe<Scalars['String']['input']>;
  back_gte?: InputMaybe<Scalars['String']['input']>;
  back_in?: InputMaybe<Array<Scalars['String']['input']>>;
  back_lt?: InputMaybe<Scalars['String']['input']>;
  back_lte?: InputMaybe<Scalars['String']['input']>;
  back_not?: InputMaybe<Scalars['String']['input']>;
  back_not_contains?: InputMaybe<Scalars['String']['input']>;
  back_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  back_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  back_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  back_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  back_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  back_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  back_starts_with?: InputMaybe<Scalars['String']['input']>;
  back_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  left?: InputMaybe<Scalars['String']['input']>;
  left_contains?: InputMaybe<Scalars['String']['input']>;
  left_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  left_ends_with?: InputMaybe<Scalars['String']['input']>;
  left_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  left_gt?: InputMaybe<Scalars['String']['input']>;
  left_gte?: InputMaybe<Scalars['String']['input']>;
  left_in?: InputMaybe<Array<Scalars['String']['input']>>;
  left_lt?: InputMaybe<Scalars['String']['input']>;
  left_lte?: InputMaybe<Scalars['String']['input']>;
  left_not?: InputMaybe<Scalars['String']['input']>;
  left_not_contains?: InputMaybe<Scalars['String']['input']>;
  left_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  left_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  left_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  left_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  left_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  left_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  left_starts_with?: InputMaybe<Scalars['String']['input']>;
  left_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Aavegotchi_Filter>>>;
  right?: InputMaybe<Scalars['String']['input']>;
  right_contains?: InputMaybe<Scalars['String']['input']>;
  right_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  right_ends_with?: InputMaybe<Scalars['String']['input']>;
  right_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  right_gt?: InputMaybe<Scalars['String']['input']>;
  right_gte?: InputMaybe<Scalars['String']['input']>;
  right_in?: InputMaybe<Array<Scalars['String']['input']>>;
  right_lt?: InputMaybe<Scalars['String']['input']>;
  right_lte?: InputMaybe<Scalars['String']['input']>;
  right_not?: InputMaybe<Scalars['String']['input']>;
  right_not_contains?: InputMaybe<Scalars['String']['input']>;
  right_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  right_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  right_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  right_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  right_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  right_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  right_starts_with?: InputMaybe<Scalars['String']['input']>;
  right_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg?: InputMaybe<Scalars['String']['input']>;
  svg_contains?: InputMaybe<Scalars['String']['input']>;
  svg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_gt?: InputMaybe<Scalars['String']['input']>;
  svg_gte?: InputMaybe<Scalars['String']['input']>;
  svg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  svg_lt?: InputMaybe<Scalars['String']['input']>;
  svg_lte?: InputMaybe<Scalars['String']['input']>;
  svg_not?: InputMaybe<Scalars['String']['input']>;
  svg_not_contains?: InputMaybe<Scalars['String']['input']>;
  svg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  svg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Aavegotchi_OrderBy {
  Back = 'back',
  Id = 'id',
  Left = 'left',
  Right = 'right',
  Svg = 'svg'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aavegotchi?: Maybe<Aavegotchi>;
  aavegotchis: Array<Aavegotchi>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAavegotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAavegotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aavegotchi_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aavegotchi?: Maybe<Aavegotchi>;
  aavegotchis: Array<Aavegotchi>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAavegotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAavegotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aavegotchi_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type SvgFieldsFragment = { __typename?: 'Aavegotchi', id: string, svg: string };

export type GotchiSvgQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GotchiSvgQuery = { __typename?: 'Query', aavegotchi?: { __typename?: 'Aavegotchi', id: string, svg: string } | null };

export type GotchisSvgQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type GotchisSvgQuery = { __typename?: 'Query', aavegotchis: Array<{ __typename?: 'Aavegotchi', id: string, svg: string }> };

export const SvgFieldsFragmentDoc = gql`
    fragment SvgFields on Aavegotchi {
  id
  svg
}
    `;
export const GotchiSvgDocument = gql`
    query gotchiSvg($id: ID!) {
  aavegotchi(id: $id) {
    ...SvgFields
  }
}
    ${SvgFieldsFragmentDoc}`;

/**
 * __useGotchiSvgQuery__
 *
 * To run a query within a React component, call `useGotchiSvgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGotchiSvgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGotchiSvgQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGotchiSvgQuery(baseOptions: Apollo.QueryHookOptions<GotchiSvgQuery, GotchiSvgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GotchiSvgQuery, GotchiSvgQueryVariables>(GotchiSvgDocument, options);
      }
export function useGotchiSvgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GotchiSvgQuery, GotchiSvgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GotchiSvgQuery, GotchiSvgQueryVariables>(GotchiSvgDocument, options);
        }
export type GotchiSvgQueryHookResult = ReturnType<typeof useGotchiSvgQuery>;
export type GotchiSvgLazyQueryHookResult = ReturnType<typeof useGotchiSvgLazyQuery>;
export type GotchiSvgQueryResult = Apollo.QueryResult<GotchiSvgQuery, GotchiSvgQueryVariables>;
export const GotchisSvgDocument = gql`
    query gotchisSvg($ids: [ID!]) {
  aavegotchis(where: {id_in: $ids}) {
    ...SvgFields
  }
}
    ${SvgFieldsFragmentDoc}`;

/**
 * __useGotchisSvgQuery__
 *
 * To run a query within a React component, call `useGotchisSvgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGotchisSvgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGotchisSvgQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGotchisSvgQuery(baseOptions?: Apollo.QueryHookOptions<GotchisSvgQuery, GotchisSvgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GotchisSvgQuery, GotchisSvgQueryVariables>(GotchisSvgDocument, options);
      }
export function useGotchisSvgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GotchisSvgQuery, GotchisSvgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GotchisSvgQuery, GotchisSvgQueryVariables>(GotchisSvgDocument, options);
        }
export type GotchisSvgQueryHookResult = ReturnType<typeof useGotchisSvgQuery>;
export type GotchisSvgLazyQueryHookResult = ReturnType<typeof useGotchisSvgLazyQuery>;
export type GotchisSvgQueryResult = Apollo.QueryResult<GotchisSvgQuery, GotchisSvgQueryVariables>;