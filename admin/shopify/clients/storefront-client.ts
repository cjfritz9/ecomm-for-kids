import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { LATEST_API_VERSION } from '@shopify/shopify-api';

const storefrontClient = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_SHOP_NAME!,
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN!,
  apiVersion: LATEST_API_VERSION
})

export default storefrontClient;