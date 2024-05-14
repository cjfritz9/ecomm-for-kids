/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as AdminTypes from './admin.types.d.ts';

export type CreateDraftOrderMutationVariables = AdminTypes.Exact<{
  email: AdminTypes.Scalars['String']['input'];
  lineItems?: AdminTypes.InputMaybe<Array<AdminTypes.DraftOrderLineItemInput> | AdminTypes.DraftOrderLineItemInput>;
  storeId: AdminTypes.Scalars['String']['input'];
}>;


export type CreateDraftOrderMutation = { draftOrderCreate?: AdminTypes.Maybe<{ draftOrder?: AdminTypes.Maybe<Pick<AdminTypes.DraftOrder, 'id'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type GetDraftOrdersByIdQueryVariables = AdminTypes.Exact<{
  searchQuery: AdminTypes.Scalars['String']['input'];
}>;


export type GetDraftOrdersByIdQuery = { draftOrders: { nodes: Array<(
      Pick<AdminTypes.DraftOrder, 'createdAt' | 'status' | 'totalPrice'>
      & { orderId: AdminTypes.DraftOrder['id'], orderNumber: AdminTypes.DraftOrder['name'] }
      & { customer?: AdminTypes.Maybe<Pick<AdminTypes.Customer, 'displayName'>> }
    )> } };

interface GeneratedQueryTypes {
  "\n    #graphql\n    query getDraftOrdersById($searchQuery: String!) {\n      draftOrders(first: 15, query: $searchQuery) {\n        nodes {\n          orderId: id\n          orderNumber: name\n          createdAt\n          customer: customer {\n            displayName\n          }\n          status\n          totalPrice\n        }\n      }\n    }\n  ": {return: GetDraftOrdersByIdQuery, variables: GetDraftOrdersByIdQueryVariables},
}

interface GeneratedMutationTypes {
  "\n      #graphql\n      mutation createDraftOrder($email: String!, $lineItems: [DraftOrderLineItemInput!], $storeId: String!) {\n        draftOrderCreate(\n          input: {\n            email: $email, \n            lineItems: $lineItems,\n            tags: [$storeId] ,\n            customAttributes: [\n              {\n                key: \"child_store_id\",\n                value: $storeId\n              }\n            ], \n          }\n        ) {\n          draftOrder {\n            id\n          }\n          userErrors {\n            field\n            message\n          }\n        }\n      }\n    ": {return: CreateDraftOrderMutation, variables: CreateDraftOrderMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
