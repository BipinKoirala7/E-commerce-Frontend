import { fetcher } from "@/lib/axios";
import { productSearchUrl } from "@/lib/lib";
import { useSearchParamsStore } from "@/store/zustand";
import { ProductSearchParams, ProductSearchResponse } from "@/types";
import useSWR from "swr";
import ProductList from "../Products/ProductList";

function SearchProductList() {
  const store = useSearchParamsStore();
  const params: ProductSearchParams = {
    query: store.query,
    category: store.category,
    minPrice: store.minPrice,
    maxPrice: store.maxPrice,
    sort: store.sort,
    page: store.page,
    size: store.size,
    direction: store.direction,
  };

  const query = productSearchUrl(params);
  console.log(query);

  const { isLoading, data, error } = useSWR<ProductSearchResponse>(
    query,
    fetcher,
  );

  if (isLoading)
    return (
      <div className="opacity-50 text-1xl flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="opacity-50 text-1xl flex items-center justify-center">
        Error loading Products
      </div>
    );
  if (data == null)
    return (
      <div className="opacity-50 text-1xl flex items-center justify-center">
        Something went wrong
      </div>
    );

  if (data.data.content.length === 0 && data.data.totalElements === 0) {
    return (
      <div className="opacity-50 text-1xl flex items-center justify-center">
        No Products found
      </div>
    );
  }

  return <ProductList products={data.data.content} />;
}

export default SearchProductList;
