"use client";

import * as motion from "motion/react-client";
import { Variants } from "motion";
import useSWR from "swr";

import ProductCard from "@/components/Products/ProductCard";
import { fetcher } from "@/lib/axios";
import { ApiResponseT, Product } from "@/types";

function ProductList() {
  const { isLoading, data, error } = useSWR<ApiResponseT<Product[]>>(
    process.env.NEXT_PUBLIC_BASE_PRODUCT_URL,
    fetcher,
  );

  // Handle loading, error, and empty states
  // Make sure the message are UI friendly and are in the middle of whole container.
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

  if (data.data.length === 0) {
    return (
      <div className="opacity-50 text-1xl flex items-center justify-center">
        No Products found
      </div>
    );
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="grow w-full h-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {data.data.splice(0, 20).map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <ProductCard product={product} />
        </div>
      ))}
    </motion.div>
  );
}

export default ProductList;
