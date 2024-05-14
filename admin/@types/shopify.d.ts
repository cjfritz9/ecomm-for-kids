export interface LineItem {
  variantId: `gid://shopify/ProductVariant/${string}`;
  quantity: number;
}

export interface CustomAttribute {
  key: 'child_store_id';
  value: string;
}