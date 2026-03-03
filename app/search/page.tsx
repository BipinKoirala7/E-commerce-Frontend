"use client";

import { useSearchParamsStore } from "@/store/zustand";

function Page() {
  const searchParamsStore = useSearchParamsStore();

  return (
    <div>
      <div>Search: {searchParamsStore.query || "No query provided"}</div>
      <div>
        Category: {searchParamsStore.category || "No category provided"}
      </div>
      <div>
        Price Range: {searchParamsStore.minPrice} -{" "}
        {searchParamsStore.maxPrice || "No max price provided"}
      </div>
      <div>Sort By: {searchParamsStore.sortBy || "No sort by provided"}</div>
    </div>
  );
}

export default Page;
