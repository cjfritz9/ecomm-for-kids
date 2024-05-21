import logger from '@/app/api/logger';
import adminClient from '../clients/admin-client';
import { formatFeaturedProducts } from '@/app/api/utils';

export const getFeaturedProducts = async () => {
  try {
    const data = `
      #graphql
      query getFeaturedProducts {
        metaobjectByHandle(handle:{handle:"featured-products", type: "featured_products"}) {
          fields {
            references(first: 4) {
               nodes {
                ... on Product {
                  id
                  title
                  featuredImage {
                    url
                    altText
                  }
                  description
                }
              }
            }
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      retries: 2,
    });

    if (res?.data?.metaobjectByHandle) {
      return formatFeaturedProducts(res.data.metaobjectByHandle);
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
