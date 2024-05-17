import logger from '@/app/api/logger';
import { APIResponse } from '@/app/api/response';
import { NextRequest } from 'next/server';
import { createNewCustomer, getCustomersByStoreId } from '../models/customers.model';

export const postNewCustomer = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, storeId } = body;
    if (!email || !storeId) {
      logger.info(`
        Missing Customer email
        source: postNewCustomer()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        email,
      }).asNextResponse();
    }

    const customer = await createNewCustomer(email, storeId);

    if (!customer) {
      logger.error(`
        Error creating customer
        source: postNewCustomer()
      `);
      return new APIResponse('error', 500, 'Error creating customer', null).asNextResponse();
    }

    return new APIResponse('ok', 201, 'Customer created', { customer }).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: postNewCustomer()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};

export const fetchCustomersByStoreId = async (
  _req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    if (!id) {
      logger.info(`
        Missing Store ID
        source: getCustomersByStoreId()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        id,
      }).asNextResponse();
    }

    const customers = await getCustomersByStoreId(id);

    if (!customers) {
      logger.error(`
        Error getting customers
        source: getCustomersByStoreId()
      `);
      return new APIResponse('error', 500, 'Error getting customers', null).asNextResponse();
    }

    return new APIResponse('ok', 201, 'Customers found', customers).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: getCustomersByStoreId()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
