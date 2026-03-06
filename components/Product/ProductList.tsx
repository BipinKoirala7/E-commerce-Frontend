"use client";

import * as motion from "motion/react-client";
import { Variants } from "motion";

import ProductCard from "@/components/Products/ProductCard";
import { ProductSummary } from "@/types";

type ProductListProps = {
  products: ProductSummary[];
};

function ProductList({ products }: ProductListProps) {
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
      // [repeat(auto-fit,minmax(250px,1fr))]
      className="grow w-full h-full grid grid-cols-4 gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <ProductCard product={product} />
        </div>
      ))}
    </motion.div>
  );
}

export default ProductList;
