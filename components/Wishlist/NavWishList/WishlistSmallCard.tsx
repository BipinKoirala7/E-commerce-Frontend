"use client";

import { WishListProductSummary } from "@/types";
import IconButton from "@/components/ui/IconButton";

import Image from "next/image";
import { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { BsPatchPlus } from "react-icons/bs";

type WishlistSmallCardProps = {
  product: WishListProductSummary;
};

function WishlistSmallCard({ product }: WishlistSmallCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      key={product.productId}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      className="p-2 rounded-sm flex items-center space-x-4 overflow-hidden cursor-pointer hover:bg-primary smooth-transition"
    >
      <Image
        src={product.productImageUrl}
        alt={product.productName}
        width={60}
        height={60}
        className="w-16 aspect-4/3 rounded object-cover"
      />
      <div className="relative flex flex-col gap-1 overflow-hidden">
        <p className="text-md font-medium single-line">{product.productName}</p>
        <p className="text-sm text-muted-foreground">
          ${product.productPrice.toFixed(2)}
        </p>
      </div>
      <div
        className={`h-full flex gap-2 p-1 items-center smooth-transition ${showOptions ? "flex" : "hidden"}`}
      >
        <IconButton
          icon={<BsPatchPlus className="w-5 h-5" />}
          className="hover:bg-secondary"
        />
        <IconButton
          icon={<TiMinus className="w-5 h-5" />}
          className="hover:bg-secondary"
        />
      </div>
    </div>
  );
}

export default WishlistSmallCard;
