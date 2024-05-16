import { ApiType, pluckConfig, preset, shopifyApiTypes } from '@shopify/api-codegen-preset';

export default {
  // For syntax highlighting / auto-complete when writing operations
  schema: 'https://shopify.dev/admin-graphql-direct-proxy/2024-04',
  documents: ['./**/*.{js,ts,jsx,tsx}'],
  projects: {
    default: {
      // For type extraction
      schema: 'https://shopify.dev/admin-graphql-direct-proxy/2024-04',
      documents: ['./shopify/models/*.{js,ts,jsx,tsx}'],
      extensions: {
        codegen: {
          // Enables support for `#graphql` tags, as well as `/* GraphQL */`
          pluckConfig,
          generates: {
            './@types/shopify-codegen/admin.schema.json': {
              plugins: ['introspection'],
              config: { minify: true },
            },
            './@types/shopify-codegen/admin.types.d.ts': {
              plugins: ['typescript'],
            },
            './@types/shopify-codegen/admin.generated.d.ts': {
              preset,
              presetConfig: {
                apiType: ApiType.Admin,
              },
            },
          },
        },
      },
    },
  },
};
