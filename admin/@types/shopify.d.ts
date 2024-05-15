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

export interface CollectionProduct {
  title: string;
  priceRangeV2: {
    min: string;
    max: string;
  }
  status: string;
  totalInventory: number;
  featuredImage: {
    url: string;
    altText: string;
  }
}