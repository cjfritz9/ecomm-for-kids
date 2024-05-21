import { cache } from "react";

const BASE_ADMIN_API = 'http://localhost:3001/api';

export const getFeaturedProducts = cache(async () => {
  const res = await fetch(`${BASE_ADMIN_API}/shopify/featured-products`);

  const result = await res.json();

  if (result && result.data) {
    return result.data;
  } else {
    return null;
  }
})