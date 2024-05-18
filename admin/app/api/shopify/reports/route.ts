import adminClient from '@/shopify/clients/admin-client';
import { NextRequest } from 'next/server';
import { APIResponse } from '../../response';
import logger from '../../logger';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // const data = `
    //   mutation {
    //     bulkOperationRunQuery(query: """
    //       {
    //         orders(query:"created_at:>=2024-04-17 AND created_at:<2024-05-17 AND tag:'child_store_id:663d341ddc13981b59e8ac7f'") {
    //           edges {
    //             node {
    //               id
    //             }
    //           }
    //         }
    //       }
    //       """) {
    //       bulkOperation {
    //         id
    //       }
    //       userErrors {
    //         field
    //         message
    //       }
    //     }
    //   }
    // `;

    const data = `
      mutation {
        bulkOperationRunQuery(query: """
          {
            products {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
          """) {
          bulkOperation {
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
      retries: 2,
    });

    if (res?.data?.bulkOperationRunQuery?.bulkOperation?.id) {
      return new APIResponse('ok', 201, 'Report Operation created', {
        id: res.data.bulkOperationRunQuery.bulkOperation.id,
      }).asNextResponse();
    }

    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: postDraftOrder()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
