const BASE_ADMIN_API = 'http://localhost:3001/api';

export const getFeaturedProducts = async () => {
  const res = await fetch(`${BASE_ADMIN_API}/shopify/featured-products`);

  const result = await res.json();

  console.log(result)
}