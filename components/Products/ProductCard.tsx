"use client";

import { useMotionValue } from "framer-motion";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Variants } from "motion";

import ProductInfo from "@/components/Products/ProductInfo";
import ProductActions from "@/components/Products/ProductActions";
import { ProductSummary } from "@/types";

type ProductCardProps = {
  product: ProductSummary;
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
      className="relative flex flex-col bg-white rounded-lg overflow-hidden cursor-pointer"
    >
      <div
        className={
          "flex items-center justify-center aspect-5/7 mix-blend-multiply"
        }
      >
        <Image
          src={product.images[0].imageUrl}
          alt={product.name}
          width={365}
          height={400}
          className="object-contain w-60"
          loading="eager"
        />
      </div>
      <ProductActions show={show} product={product} />
      <ProductInfo show={show} product={product} />
    </motion.div>
  );
}

export default ProductCard;
