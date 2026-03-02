"use client";

import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../ui/IconButton";
import { TiMinus } from "react-icons/ti";
import { BsPatchPlus } from "react-icons/bs";

type WishlistSmallCardProps = {
  product: Product;
};

function WishlistSmallCard({ product }: WishlistSmallCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      key={product.id}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      className="p-2 rounded-sm flex items-center space-x-4 overflow-hidden cursor-pointer hover:bg-primary smooth-transition"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={60}
        height={60}
        className="w-16 aspect-4/3 rounded object-cover"
      />
      <div className="relative flex flex-col gap-1 overflow-hidden">
        <p className="text-md font-medium single-line">{product.name}</p>
        <p className="text-sm text-muted-foreground">
          ${product.price.toFixed(2)}
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
