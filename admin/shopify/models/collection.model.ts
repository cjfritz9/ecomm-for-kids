import logger from '@/app/api/logger';
import adminClient from '../clients/admin-client';
import { formatShopifyCollection } from '@/app/api/utils';

export const getCollectionById = async (id: string) => {
  try {
    const data = `
      #graphql
      query getCollectionById ($id: ID!) {
        collection(id: $id) {
          products(first: 20) {
            nodes {
              id
              title
              status
              priceRangeV2 {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              variantsCount {
                count
                precision
              }
              totalInventory
              featuredImage {
                url
                altText
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        id: `gid://shopify/Collection/${id}`,
      },
      retries: 2,
    });

    if (res?.data?.collection) {
      const collection = formatShopifyCollection(res.data.collection);
      return collection;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: getCollectionById()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getCollectionById()
    `);
    return null;
  }
};

export const getCollectionNextPage = async ({
  collectionId,
  cursor,
}: {
  collectionId: string;
  cursor: string;
}) => {
  try {
    const data = `
      #graphql
      query getCollectionNextPage ($id: ID!, $cursor: String!) {
        collection(id: $id) {
          products(first: 20, after: $cursor) {
            nodes {
              id
              title
              status
              priceRangeV2 {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              variantsCount {
                count
                precision
              }
              totalInventory
              featuredImage {
                url
                altText
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        id: `gid://shopify/Collection/${collectionId}`,
        cursor

      },
      retries: 2,
    });

    if (res?.data?.collection) {
      const collection = formatShopifyCollection(res.data.collection);
      return collection;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: getCollectionById()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getCollectionById()
    `);
    return null;
  }
};

export const getCollectionPrevPage = async ({
  collectionId,
  cursor,
}: {
  collectionId: string;
  cursor: string;
}) => {
  try {
    const data = `
      #graphql
      query getCollectionPrevPage ($id: ID!, $cursor: String!) {
        collection(id: $id) {
          products(last: 20, before: $cursor) {
            nodes {
              id
              title
              status
              priceRangeV2 {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              variantsCount {
                count
                precision
              }
              totalInventory
              featuredImage {
                url
                altText
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        id: `gid://shopify/Collection/${collectionId}`,
        cursor

      },
      retries: 2,
    });

    if (res?.data?.collection) {
      const collection = formatShopifyCollection(res.data.collection);
      return collection;
    } else {
      logger.error(`
      ${JSON.stringify(res)}
      source: getCollectionById()
    `);
      return null;
    }
  } catch (error) {
    logger.error(`
      ${error}
      source: getCollectionById()
    `);
    return null;
  }
};
