import { fetcher } from "@/lib/axios";
import { productSearchUrl } from "@/lib/lib";
import { useSearchParamsStore } from "@/store/zustand";
import { ProductSearchResponse } from "@/types";
import useSWR from "swr";

function Page() {
  const store = useSearchParamsStore();
  const { isLoading, data, error } = useSWR<ProductSearchResponse>(
    productSearchUrl(
      store.query,
      store.category,
      store.minPrice,
      store.maxPrice,
      store.sort,
      store.page,
      store.size,
      store.direction,
    ),
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
  return (
    <div>
      <p>Products go here</p>
    </div>
  );
}

export default Page;
