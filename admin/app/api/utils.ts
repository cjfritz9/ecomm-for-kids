import { OrderData } from '@/@types/shopify';
import {
  GetCollectionByIdQuery,
  GetCustomersByStoreIdQuery,
  GetFeaturedProductsQuery,
} from '@/@types/shopify-codegen/admin.generated';
import logger from './logger';
import prisma from '@/prisma/client';

export const formatShopifyDraftOrders = (orders: OrderData[]) => {
  return orders.map((order) => ({
    ...order,
    createdAt: new Date(order.createdAt).toLocaleDateString('en'),
    customer: order.customer.displayName,
  }));
};

export const formatShopifyCollection = (collection: GetCollectionByIdQuery['collection']) => {
  return {
    products: collection!.products.nodes.map((product) => ({
      ...product,
      priceRangeV2: {
        min: product.priceRangeV2.minVariantPrice.amount,
        max: product.priceRangeV2.maxVariantPrice.amount,
      },
    })),
    pageInfo: collection!.products.pageInfo,
  };
};

export const formatShopifyCustomers = (customers: GetCustomersByStoreIdQuery['customers']) => {
  return {
    customers: customers.nodes.map((customer) => ({
      ...customer,
    createdAt: new Date(customer.createdAt).toLocaleDateString('en'),
    subscriptionState: customer.emailMarketingConsent?.marketingState,
    })),
    pageInfo: customers.pageInfo,
  };
};

export const formatFeaturedProducts = (data: GetFeaturedProductsQuery['metaobjectByHandle']) => {
  return data?.fields[0]?.references?.nodes ?? null;
}

export const getServerSideStoreData = async (userId: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user || !user.activeStoreId) {
      return null;
    }

    const store = await prisma.store.findFirst({
      where: {
        id: user.activeStoreId,
      },
    });

    if (!store) {
      return null;
    }

    return {
      name: store.name,
      storeId: store.id,
      collectionId: store.collectionId,
    };
  } catch (error) {
    logger.error(`
      Error getting store data
      ${error}
      source: getServerSideStoreData()
    `);
    return null;
  }
};
