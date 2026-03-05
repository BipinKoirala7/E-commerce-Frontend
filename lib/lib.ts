export const productSearchUrl = (
  query: string,
  category: string,
  minPrice: string,
  maxPrice: string,
  page: string,
  size: string,

  sort: string,
  direction: "ASC" | "DESC",
) => {
  return (
    process.env.NEXT_PUBLIC_BASE_PRODUCT_URL +
    `?query=${query}` +
    `&category=${category}` +
    `&minPrice=${minPrice}` +
    `&maxPrice=${maxPrice}` +
    `&page=${page}` +
    `&size=${size}` +
    `&sort=${sort}` +
    `&direction=${direction}`
  );
};
