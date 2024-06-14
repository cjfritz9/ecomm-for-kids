import logger from '@/app/api/logger';
import { APIResponse } from '@/app/api/response';
import adminClient from '@/shopify/clients/admin-client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (_req: NextRequest, { params: { id } }: { params: { id: string } }) => {
  try {
    const data = `
      query getBulkOperationByID($id: ID!) {
        node(id: $id) {
          ... on BulkOperation {
            url
            partialDataUrl
            errorCode
            status
          }
        }
      }
    `;

    const res = await adminClient.request(data, {
      variables: {
        id: `gid://shopify/BulkOperation/${id}`,
      },
      retries: 2,
    });

    if (res?.data?.node?.url) {
      const reportRes = await fetch(res.data.node.url);

      if (reportRes) {
        const result = await reportRes.text();

        const jsonResult = result
          .slice(0, result.length - 1)
          .split('\n')
          .map((line) => JSON.parse(line));

        if (result) {
          return new APIResponse('ok', 200, 'Success', { total: jsonResult.length} ).asNextResponse();
        }
      }
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
