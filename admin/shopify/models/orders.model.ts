import { OrderCreateFields } from '@/@types/orders';
import adminClient from '../clients/admin-client';
import logger from '@/app/api/logger';
import { formatShopifyDraftOrders } from '@/app/api/utils';
import { OrderData } from '@/@types/shopify';

export const createDraftOrder = async ({ email, lineItems, storeId }: OrderCreateFields) => {
  try {
    const data = `
      #graphql
      mutation createDraftOrder($email: String!, $lineItems: [DraftOrderLineItemInput!], $storeId: String!, $storeTag: String!) {
        draftOrderCreate(
          input: {
            email: $email, 
            lineItems: $lineItems,
            tags: [$storeTag] ,
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
        storeTag: `child_store_id:${storeId}`,
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
    query getOrdersByStoreId($searchQuery: String!) {
      draftOrders(first: 15, query: $searchQuery) {
        nodes {
          orderId: id
          orderNumber: name
          createdAt
          customer: customer {
            displayName
          }
          status
          totalPrice
        }
      }
    }
  `;

    const res = await adminClient.request(data, {
      variables: {
        searchQuery: `tag:child_store_id:${storeId}`,
      },
      retries: 2,
    });

    if (res?.data?.draftOrders?.nodes) {
      const orders = formatShopifyDraftOrders(res.data.draftOrders.nodes as OrderData[]);
      return orders;
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
