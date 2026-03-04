"use client";

import { Product } from "@/types";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import * as motion from "motion/react-client";

type ProductInfoProps = {
  show: MotionValue<number>;
  product: Product;
};

function ProductInfo({ show, product }: ProductInfoProps) {
  const springValue = useSpring(show, { stiffness: 300, damping: 30 });
  const bottomPos = useTransform(springValue, [0, 1], ["-12.5%", "0%"]);

  return (
    <>
      <motion.div
        style={{ bottom: bottomPos }}
        className="absolute left-1/2 -translate-x-1/2 w-full flex flex-col gap-1 p-2 bg-foreground hover:bg-primary rounded-lg"
      >
        <p>{product.name.toWellFormed()}</p>
        <p className={"font-bold"}>${product.price}</p>
      </motion.div>
    </>
  );
}

export default ProductInfo;
