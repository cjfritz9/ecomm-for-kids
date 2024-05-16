import logger from '@/app/api/logger';
import adminClient from '../clients/admin-client';

export const getCustomerByEmail = async (email: string) => {
  try {
    const data = `
      #graphql
      query getCustomerByEmail ($query: String!) {
        customers(first: 1, query:$query) {
          nodes {
            id
            displayName
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        query: `email:${email}`,
      },
      retries: 2,
    });

    if (Array.isArray(res?.data?.customers?.nodes)) {
      return res.data.customers.nodes[0] ?? null;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: getCustomerByEmail()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getCustomerByEmail()
    `);
    return null;
  }
};

export const getCustomersByStoreId = async (storeId: string) => {
  try {
    const data = `
      #graphql
      query getCustomersByStoreId ($query: String!) {
        customers(first: 25, query: $query) {
          nodes {
            verifiedEmail
            displayName
            createdAt
            numberOfOrders
            emailMarketingConsent {
              marketingState
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        query: `tag:${storeId}`,
      },
      retries: 2,
    });

    if (res?.data?.customers.nodes) {
      return res.data.customers.nodes;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: getCustomersByStoreId()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getCustomersByStoreId()
    `);
    return null;
  }
};

export const createNewCustomer = async (email: string, storeId: string) => {
  try {
    const data = `
      #graphql
      mutation createNewCustomer ($email: String!, $storeTag: String!) {
        customerCreate(input:{ email: $email, tags: [$storeTag]}) {
          customer {
            id
            email
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
        storeTag: `child_store_id:${storeId}`,
      },
      retries: 2,
    });

    if (res?.data?.customerCreate?.userErrors?.length) {
      res.data.customerCreate.userErrors.map((error) => {
        logger.error(`${error.field}: ${error.message}`);
      });
      logger.error('source: createDraftOrder()');
      return null;
    }

    if (res?.data?.customerCreate?.customer) {
      return res.data.customerCreate.customer;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: createNewCustomer()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: createNewCustomer()
    `);
    return null;
  }
};
