import logger from '@/app/api/logger';
import { APIResponse } from '@/app/api/response';
import { NextRequest } from 'next/server';
import { getCollectionById } from '../models/collection.model';

export const fetchCollectionById = async (
  _req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    if (!id) {
      logger.info(`
        Missing Collection ID
        source: fetchCollectionById()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        id,
      }).asNextResponse();
    }

    const collection = await getCollectionById(id);

    if (!collection) {
      logger.error(`
        Error getting Shopify collection
        source: fetchCollectionById()
      `);
      return new APIResponse('error', 500, 'Error getting Shopify collection', null).asNextResponse();
    }

    return new APIResponse('ok', 200, 'Collection Found', collection).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: fetchCollectionById()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
