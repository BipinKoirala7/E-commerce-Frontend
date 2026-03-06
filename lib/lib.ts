import { ProductSearchParams } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_BACKEND_URL as string;

export const productSearchUrl = (params: ProductSearchParams) => {
  const searchParams = new URLSearchParams(
    Object.entries(params).filter(
      ([_, value]) => value != null && value !== "",
    ),
  );

  return (
    baseUrl +
    process.env.NEXT_PUBLIC_BASE_PRODUCT_URL +
    "?" +
    searchParams.toString()
  );
};

export const productCategorySearchUrl = (category: string) => {
  return (
    baseUrl + process.env.NEXT_PUBLIC_BASE_PRODUCT_URL + "/category/" + category
  );
};

export const productDetailsUrl = (productId: string) => {
  return baseUrl + process.env.NEXT_PUBLIC_BASE_PRODUCT_URL + "/" + productId;
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
