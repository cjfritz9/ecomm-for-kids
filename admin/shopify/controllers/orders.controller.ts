import { OrderCreateFields } from '@/@types/orders';
import logger from '@/app/api/logger';
import { APIResponse } from '@/app/api/response';
import { NextRequest, NextResponse } from 'next/server';
import { createDraftOrder, getOrdersByStoreId } from '../models/orders.model';
import { NextUrlWithParsedQuery } from 'next/dist/server/request-meta';
import {
  createNewCustomer,
  getCustomerByEmail,
  updateExistingCustomer,
} from '../models/customers.model';

export const postDraftOrder = async (req: NextRequest) => {
  const body = (await req.json()) as OrderCreateFields;

  const { storeId, email, lineItems } = body;

  try {
    if (!storeId || !email || !lineItems) {
      logger.info(`
        Missing input field
        ${JSON.stringify(body)}
        source: postDraftOrder()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        storeId,
        email,
        lineItems,
      }).asNextResponse();
    }

    const customer = await getCustomerByEmail(email);

    if (customer) {
      await updateExistingCustomer(customer.id, storeId);
    } else {
      await createNewCustomer(email, storeId);
    }

    const order = await createDraftOrder({ storeId, lineItems, email });

    if (!order) {
      logger.error(`
        Error creating Shopify Order
        source: postDraftOrder()
      `);
      return new APIResponse('error', 500, 'Error creating Shopify Order', null).asNextResponse();
    }

    return new APIResponse('ok', 201, 'Draft Order Created', order).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: postDraftOrder()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};

export const fetchOrderById = async (req: NextRequest) => {
  return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
};

export const fetchOrdersByStoreId = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    if (!id) {
      logger.info(`
        Missing Store ID
        source: fetchOrdersByStoreId()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        id,
      }).asNextResponse();
    }

    const orders = await getOrdersByStoreId(id);

    if (!orders) {
      logger.error(`
        Error getting Shopify orders
        source: fetchOrdersByStoreId()
      `);
      return new APIResponse('error', 500, 'Error getting Shopify orders', null).asNextResponse();
    }

    return new APIResponse('ok', 200, 'Orders Found', orders).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: fetchOrdersByStoreId()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
