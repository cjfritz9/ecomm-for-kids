import '@shopify/shopify-api/adapters/node';
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';

const shopify = shopifyApi({
  apiSecretKey: process.env.SHOPIFY_SECRET_KEY!,
  adminApiAccessToken: process.env.SHOPIFY_ADMIN_TOKEN!,
  hostName: process.env.SHOPIFY_SHOP_NAME!,
  apiVersion: LATEST_API_VERSION,
  isCustomStoreApp: true,
  isEmbeddedApp: false
});

const session = shopify.session.customAppSession(
  shopify.config.hostName
);

const adminClient = new shopify.clients.Graphql({ session });

export default adminClient;
