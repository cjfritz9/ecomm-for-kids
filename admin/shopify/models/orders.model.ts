import { OrderCreateFields } from '@/@types/orders';
import adminClient from '../clients/admin-client';
import logger from '@/app/api/logger';

export const createDraftOrder = async ({ email, lineItems, storeId }: OrderCreateFields) => {
  console.log(email, lineItems, storeId);
  try {
    const data = `
      #graphql
      mutation createDraftOrder($email: String!, $lineItems: [DraftOrderLineItemInput!], $storeId: String!) {
        draftOrderCreate(
          input: {
            email: $email, 
            lineItems: $lineItems,
            tags: [$storeId] ,
            customAttributes: [
              {
                key: "child_store_id",
                value: $storeId
              }
            ], 
          }
        ) {
          draftOrder {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        email,
        lineItems,
        storeId,
      },
      retries: 2,
    });

    if (res?.data?.draftOrderCreate?.userErrors?.length) {
      res.data.draftOrderCreate.userErrors.map((error) => {
        logger.error(`${error.field}: ${error.message}`);
      });
      logger.error('source: createDraftOrder()');
    }

    return res;
  } catch (error) {
    logger.error(`
      ${error}
      source: createDraftOrder()
    `);
    return null;
  }
};

export const getOrdersByStoreId = async (storeId: string) => {
  try {
    const data = `
    #graphql
    query getDraftOrdersById($searchQuery: String!) {
      draftOrders(first: 15, query: $searchQuery) {
        nodes {
          id
          name
        }
      }
    }
  `;

    const res = await adminClient.request(data, {
      variables: {
        searchQuery: `tag:${storeId}`,
      },
      retries: 2,
    });

    if (res?.data?.draftOrders?.nodes) {
      return res.data.draftOrders;
    } else {
      logger.error(`
        ${JSON.stringify(res)}
        source: getOrdersByStoreId()
      `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getOrdersByStoreId()
    `);
    return null;
  }
};
