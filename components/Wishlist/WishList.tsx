"use client";

import { fetcher } from "@/lib/axios";
import useSWR from "swr";

import WishlistCard from "@/components/Wishlist/WishlistCard";
import { ApiResponseT, WishListProductSummary } from "@/types";

function WishList() {
  const { isLoading, data, error } = useSWR<
    ApiResponseT<WishListProductSummary[]>
  >(process.env.NEXT_PUBLIC_BASE_WISHLIST_URL, fetcher);

  // Handle loading, error, and empty states
  // Make sure the message are UI friendly and are in the middle of whole container.
  if (isLoading)
    return (
      <div className="min-h-60 opacity-50 text-1xl flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-60 opacity-50 text-1xl flex items-center justify-center">
        Error loading wishlist
      </div>
    );
  if (data == null)
    return (
      <div className="min-h-60 opacity-50 text-1xl flex items-center justify-center">
        Something went wrong
      </div>
    );

  if (data.data.length === 0) {
    return (
      <div className="min-h-60 opacity-50 text-1xl flex items-center justify-center">
        Your wishlist is empty
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {data.data.map((product) => (
        <WishlistCard key={product.productId} wishlistProduct={product} />
      ))}
    </div>
  );
}

export default WishList;
