import { fetchFeaturedProducts } from "@/shopify/controllers/featured-products.controller";
import { getFeaturedProducts } from "@/shopify/models/featured-products.model";

export const GET = fetchFeaturedProducts;