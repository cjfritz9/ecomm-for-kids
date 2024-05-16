export const fetchNextProductsPage = async (collectionId: string, cursor: string) => {
  try {
    const res = await fetch(`/api/shopify/collection/${collectionId}/page?nextCursor=${cursor}`);
    const result = await res.json();

    if (result?.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const fetchPrevProductsPage = async (collectionId: string, cursor: string) => {
  try {
    const res = await fetch(`/api/shopify/collection/${collectionId}/page?prevCursor=${cursor}`);
    const result = await res.json();

    if (result?.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
