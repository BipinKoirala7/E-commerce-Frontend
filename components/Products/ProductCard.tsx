"use client";

import { useMotionValue } from "framer-motion";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Variants } from "motion";

import ProductInfo from "@/components/Products/ProductInfo";
import ProductActions from "@/components/Products/ProductActions";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const show = useMotionValue(0);
  console.log(product);

  //  Product Card Variants. Don't change the name ("hidden" and "visible"). Inherited from parent.
  const variants: Variants = {
    //  Start at 10px from the bottom
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      onMouseEnter={() => show.set(1)}
      onMouseLeave={() => show.set(0)}
      variants={variants}
      className="relative flex flex-col rounded-lg border border-primary overflow-hidden cursor-pointer"
    >
      <div className={"relative aspect-5/6"}>
        <Image
          src={product.images[0].imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          loading="eager"
        />
      </div>
      <ProductActions show={show} product={product} />
      <ProductInfo show={show} product={product} />
    </motion.div>
  );
}

export default ProductCard;
