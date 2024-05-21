/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as AdminTypes from './admin.types.d.ts';

export type GetCollectionByIdQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type GetCollectionByIdQuery = { collection?: AdminTypes.Maybe<{ products: { nodes: Array<(
        Pick<AdminTypes.Product, 'id' | 'title' | 'status' | 'totalInventory'>
        & { priceRangeV2: { minVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'>, maxVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'> }, variantsCount?: AdminTypes.Maybe<Pick<AdminTypes.Count, 'count' | 'precision'>>, featuredImage?: AdminTypes.Maybe<Pick<AdminTypes.Image, 'url' | 'altText'>> }
      )>, pageInfo: Pick<AdminTypes.PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'> } }> };

export type GetCollectionNextPageQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  cursor: AdminTypes.Scalars['String']['input'];
}>;


export type GetCollectionNextPageQuery = { collection?: AdminTypes.Maybe<{ products: { nodes: Array<(
        Pick<AdminTypes.Product, 'id' | 'title' | 'status' | 'totalInventory'>
        & { priceRangeV2: { minVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'>, maxVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'> }, variantsCount?: AdminTypes.Maybe<Pick<AdminTypes.Count, 'count' | 'precision'>>, featuredImage?: AdminTypes.Maybe<Pick<AdminTypes.Image, 'url' | 'altText'>> }
      )>, pageInfo: Pick<AdminTypes.PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'> } }> };

export type GetCollectionPrevPageQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  cursor: AdminTypes.Scalars['String']['input'];
}>;


export type GetCollectionPrevPageQuery = { collection?: AdminTypes.Maybe<{ products: { nodes: Array<(
        Pick<AdminTypes.Product, 'id' | 'title' | 'status' | 'totalInventory'>
        & { priceRangeV2: { minVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'>, maxVariantPrice: Pick<AdminTypes.MoneyV2, 'amount'> }, variantsCount?: AdminTypes.Maybe<Pick<AdminTypes.Count, 'count' | 'precision'>>, featuredImage?: AdminTypes.Maybe<Pick<AdminTypes.Image, 'url' | 'altText'>> }
      )>, pageInfo: Pick<AdminTypes.PageInfo, 'startCursor' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage'> } }> };

export type GetCustomerByEmailQueryVariables = AdminTypes.Exact<{
  query: AdminTypes.Scalars['String']['input'];
}>;


export type GetCustomerByEmailQuery = { customers: { nodes: Array<Pick<AdminTypes.Customer, 'id'>> } };

export type GetCustomersByStoreIdQueryVariables = AdminTypes.Exact<{
  query: AdminTypes.Scalars['String']['input'];
}>;


export type GetCustomersByStoreIdQuery = { customers: { nodes: Array<(
      Pick<AdminTypes.Customer, 'verifiedEmail' | 'displayName' | 'createdAt' | 'numberOfOrders'>
      & { emailMarketingConsent?: AdminTypes.Maybe<Pick<AdminTypes.CustomerEmailMarketingConsentState, 'marketingState'>> }
    )>, pageInfo: Pick<AdminTypes.PageInfo, 'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'> } };

export type CreateNewCustomerMutationVariables = AdminTypes.Exact<{
  email: AdminTypes.Scalars['String']['input'];
  storeTag: AdminTypes.Scalars['String']['input'];
}>;


export type CreateNewCustomerMutation = { customerCreate?: AdminTypes.Maybe<{ customer?: AdminTypes.Maybe<Pick<AdminTypes.Customer, 'id' | 'email'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type UpdateExistingCustomerMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  storeTag: AdminTypes.Scalars['String']['input'];
}>;


export type UpdateExistingCustomerMutation = { customerUpdate?: AdminTypes.Maybe<{ customer?: AdminTypes.Maybe<Pick<AdminTypes.Customer, 'id'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type GetFeaturedProductsQueryVariables = AdminTypes.Exact<{ [key: string]: never; }>;


export type GetFeaturedProductsQuery = { metaobjectByHandle?: AdminTypes.Maybe<{ fields: Array<{ references?: AdminTypes.Maybe<{ nodes: Array<AdminTypes.Maybe<(
          Pick<AdminTypes.Product, 'id' | 'title' | 'description'>
          & { featuredImage?: AdminTypes.Maybe<Pick<AdminTypes.Image, 'url' | 'altText'>> }
        )>> }> }> }> };

export type CreateDraftOrderMutationVariables = AdminTypes.Exact<{
  email: AdminTypes.Scalars['String']['input'];
  lineItems?: AdminTypes.InputMaybe<Array<AdminTypes.DraftOrderLineItemInput> | AdminTypes.DraftOrderLineItemInput>;
  storeId: AdminTypes.Scalars['String']['input'];
  storeTag: AdminTypes.Scalars['String']['input'];
}>;


export type CreateDraftOrderMutation = { draftOrderCreate?: AdminTypes.Maybe<{ draftOrder?: AdminTypes.Maybe<Pick<AdminTypes.DraftOrder, 'id'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type GetOrdersByStoreIdQueryVariables = AdminTypes.Exact<{
  searchQuery: AdminTypes.Scalars['String']['input'];
}>;


export type GetOrdersByStoreIdQuery = { draftOrders: { nodes: Array<(
      Pick<AdminTypes.DraftOrder, 'createdAt' | 'status' | 'totalPrice'>
      & { orderId: AdminTypes.DraftOrder['id'], orderNumber: AdminTypes.DraftOrder['name'] }
      & { customer?: AdminTypes.Maybe<Pick<AdminTypes.Customer, 'displayName'>> }
    )> } };

interface GeneratedQueryTypes {
  "\n      #graphql\n      query getCollectionById ($id: ID!) {\n        collection(id: $id) {\n          products(first: 20) {\n            nodes {\n              id\n              title\n              status\n              priceRangeV2 {\n                minVariantPrice {\n                  amount\n                }\n                maxVariantPrice {\n                  amount\n                }\n              }\n              variantsCount {\n                count\n                precision\n              }\n              totalInventory\n              featuredImage {\n                url\n                altText\n              }\n            }\n            pageInfo {\n              startCursor\n              endCursor\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n        }\n      }\n    ": {return: GetCollectionByIdQuery, variables: GetCollectionByIdQueryVariables},
  "\n      #graphql\n      query getCollectionNextPage ($id: ID!, $cursor: String!) {\n        collection(id: $id) {\n          products(first: 20, after: $cursor) {\n            nodes {\n              id\n              title\n              status\n              priceRangeV2 {\n                minVariantPrice {\n                  amount\n                }\n                maxVariantPrice {\n                  amount\n                }\n              }\n              variantsCount {\n                count\n                precision\n              }\n              totalInventory\n              featuredImage {\n                url\n                altText\n              }\n            }\n            pageInfo {\n              startCursor\n              endCursor\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n        }\n      }\n    ": {return: GetCollectionNextPageQuery, variables: GetCollectionNextPageQueryVariables},
  "\n      #graphql\n      query getCollectionPrevPage ($id: ID!, $cursor: String!) {\n        collection(id: $id) {\n          products(last: 20, before: $cursor) {\n            nodes {\n              id\n              title\n              status\n              priceRangeV2 {\n                minVariantPrice {\n                  amount\n                }\n                maxVariantPrice {\n                  amount\n                }\n              }\n              variantsCount {\n                count\n                precision\n              }\n              totalInventory\n              featuredImage {\n                url\n                altText\n              }\n            }\n            pageInfo {\n              startCursor\n              endCursor\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n        }\n      }\n    ": {return: GetCollectionPrevPageQuery, variables: GetCollectionPrevPageQueryVariables},
  "\n      #graphql\n      query getCustomerByEmail ($query: String!) {\n        customers(first: 1, query:$query) {\n          nodes {\n            id\n          }\n        }\n      }\n    ": {return: GetCustomerByEmailQuery, variables: GetCustomerByEmailQueryVariables},
  "\n      #graphql\n      query getCustomersByStoreId ($query: String!) {\n        customers(first: 25, query: $query) {\n          nodes {\n            verifiedEmail\n            displayName\n            createdAt\n            numberOfOrders\n            emailMarketingConsent {\n              marketingState\n            }\n          }\n          pageInfo {\n            startCursor\n            endCursor\n            hasPreviousPage\n            hasNextPage\n          }\n        }\n      }\n    ": {return: GetCustomersByStoreIdQuery, variables: GetCustomersByStoreIdQueryVariables},
  "\n      #graphql\n      query getFeaturedProducts {\n        metaobjectByHandle(handle:{handle:\"featured-products\", type: \"featured_products\"}) {\n          fields {\n            references(first: 4) {\n               nodes {\n                ... on Product {\n                  id\n                  title\n                  featuredImage {\n                    url\n                    altText\n                  }\n                  description\n                }\n              }\n            }\n          }\n        }\n      }\n    ": {return: GetFeaturedProductsQuery, variables: GetFeaturedProductsQueryVariables},
  "\n    #graphql\n    query getOrdersByStoreId($searchQuery: String!) {\n      draftOrders(first: 15, query: $searchQuery) {\n        nodes {\n          orderId: id\n          orderNumber: name\n          createdAt\n          customer: customer {\n            displayName\n          }\n          status\n          totalPrice\n        }\n      }\n    }\n  ": {return: GetOrdersByStoreIdQuery, variables: GetOrdersByStoreIdQueryVariables},
}

interface GeneratedMutationTypes {
  "\n      #graphql\n      mutation createNewCustomer ($email: String!, $storeTag: String!) {\n        customerCreate(input:{ email: $email, tags: [$storeTag]}) {\n          customer {\n            id\n            email\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }\n    ": {return: CreateNewCustomerMutation, variables: CreateNewCustomerMutationVariables},
  "\n      #graphql\n      mutation updateExistingCustomer ($id: ID!, $storeTag: String!) {\n        customerUpdate(input:{ id: $id, tags: [$storeTag]}) {\n          customer {\n            id\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }\n    ": {return: UpdateExistingCustomerMutation, variables: UpdateExistingCustomerMutationVariables},
  "\n      #graphql\n      mutation createDraftOrder($email: String!, $lineItems: [DraftOrderLineItemInput!], $storeId: String!, $storeTag: String!) {\n        draftOrderCreate(\n          input: {\n            email: $email, \n            lineItems: $lineItems,\n            tags: [$storeTag] ,\n            customAttributes: [\n              {\n                key: \"child_store_id\",\n                value: $storeId\n              }\n            ], \n          }\n        ) {\n          draftOrder {\n            id\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }\n    ": {return: CreateDraftOrderMutation, variables: CreateDraftOrderMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
