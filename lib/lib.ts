import { ProductSearchParams } from "@/types";

export const productSearchUrl = (params: ProductSearchParams) => {
  const searchParams = new URLSearchParams(
    Object.entries(params).filter(
      ([_, value]) => value != null && value !== "",
    ),
  );

  return (
    process.env.NEXT_PUBLIC_BASE_PRODUCT_URL + "?" + searchParams.toString()
  );
};
