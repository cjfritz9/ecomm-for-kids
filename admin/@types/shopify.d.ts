export interface LineItem {
  variantId: `gid://shopify/ProductVariant/${string}`;
  quantity: number;
}

export interface CustomAttribute {
  key: 'child_store_id';
  value: string;
}

export interface OrderData {
  orderId: string;
  orderNumber: string;
  createdAt: string;
  customer: {
    displayName: string;
  };
  status: string;
  totalPrice: string;
}