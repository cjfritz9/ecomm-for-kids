import logger from "@/app/api/logger";
import { APIResponse } from "@/app/api/response";
import { NextRequest } from "next/server";
import { getStoresByOwnerId } from "../models/stores.model";

export const fetchStoresByOwnerId = async (req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    if (!id) {
      logger.info(`
        Missing Owner ID
        source: fetchStoresByOwnerId()
      `);
      return new APIResponse('error', 400, 'Missing information', {
        id,
      }).asNextResponse();
    }

    const stores = await getStoresByOwnerId(id);

    if (!stores) {
      logger.error(` 
        Error getting User stores
        source: fetchStoresByOwnerId()
      `);
      return new APIResponse('error', 500, 'Error getting User Stores', null).asNextResponse();
    }

    return new APIResponse('ok', 200, 'Stores Found', stores).asNextResponse();
  } catch (error) {
    logger.error(`
      ${error}
      source: fetchStoresByOwnerId()
    `);
    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
}
