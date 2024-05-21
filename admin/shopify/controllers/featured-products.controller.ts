import logger from '@/app/api/logger';
import { APIResponse } from '@/app/api/response';
import { NextRequest } from 'next/server';
import { getFeaturedProducts } from '../models/featured-products.model';

export const fetchFeaturedProducts = async (_req: NextRequest) => {
  try {
    const products = await getFeaturedProducts();

    if (!products) {
      logger.error(`
        Error getting featured products
        source: fetchFeaturedProducts()
      `);
      return new APIResponse(
        'error',
        500,
        'Error getting featured products',
        null
      ).asNextResponse();
    }

    return new APIResponse('ok', 200, 'Featured products found', products).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: fetchFeaturedProducts()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
