"use client";

import IconButton from "@/components/ui/IconButton";
import { fetcher } from "@/lib/axios";
import { productDetailsUrl } from "@/lib/lib";
import { ProductDetailsResponse } from "@/types";
import Image from "next/image";
import { BsPatchPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import useSWR from "swr";

function ProductDetailsPage({ productId }: { productId: string }) {
  console.log(productId);

  const { isLoading, data, error } = useSWR<ProductDetailsResponse>(
    productDetailsUrl(productId),
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
  if (data.data == null)
    return (
      <div className="min-h-60 opacity-50 text-1xl flex items-center justify-center">
        Something went wrong
      </div>
    );
  return (
    <div className="w-full h-full grid grid-cols-2 gap-8">
      <div className="w-full flex items-center justify-center p-2">
        <Image
          src={data.data.images[0].imageUrl}
          alt={data.data.name}
          width={600}
          height={600}
          className="w-auto h-auto object-contain"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-4 py-20">
        <div className="flex flex-col gap-2">
          <p className="flex text-7xl header-font">{data.data.brand}</p>
          <p className="text-4xl">{data.data.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          {data.data.images.map((img) => (
            <div
              key={img.id}
              className="w-fit bg-foreground flex items-center justify-center p-2 cursor-pointer hover:bg-secondary smooth-transition"
            >
              <Image
                src={img.imageUrl}
                alt={img.id}
                width={100}
                height={100}
                className="w-fit h-32 object-contain max-h-100 bg-primary"
                loading="eager"
              />
            </div>
          ))}
        </div>
        <p>{data.data.description}</p>
        <p id="logo" className="text-2xl font-bold logo-font">
          ${data.data.price}
        </p>
        <div className="flex gap-4 items-center">
          <IconButton
            className="p-3 border border-primary"
            icon={<FaRegHeart className="w-8 h-8" />}
          />
          <button className="bg-text flex gap-4 items-center rounded-4xl border border-text px-4 py-3 text-white cursor-pointer">
            <BsPatchPlus className="w-8 h-8" />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
