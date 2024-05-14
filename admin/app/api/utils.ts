import { OrderData } from '@/@types/shopify';

export const formatShopifyDraftOrders = (orders: OrderData[]) => {
  return orders.map((order) => ({
    ...order,
    createdAt: new Date(order.createdAt).toLocaleDateString('en'),
    customer: order.customer.displayName,
  }));
};
