"use client";

import { ApiResponseT, CartProductSummary } from "@/types";
import CartCard from "./CartCard";
import { fetcher } from "@/lib/axios";
import useSWR from "swr";
import SelectedCartInfo from "./SelectedCartInfo";

function CartList() {
  const { isLoading, data, error } = useSWR<ApiResponseT<CartProductSummary[]>>(
    process.env.NEXT_PUBLIC_BASE_CART_URL,
    fetcher,
  );

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
      {data.data.map((cartItem) => (
        <div key={cartItem.id} className="flex flex-col gap-2">
          <CartCard item={cartItem} />
        </div>
      ))}
      <div>
        <hr className="border-t-2 border-primary mt-3" />
        <SelectedCartInfo />
      </div>
    </div>
  );
}

export default CartList;
