"use client";

import { ProductSummary } from "@/types";

import { MotionValue, useSpring, useTransform } from "framer-motion";
import * as motion from "motion/react-client";

type ProductInfoProps = {
  show: MotionValue<number>;
  product: ProductSummary;
};

function ProductInfo({ show, product }: ProductInfoProps) {
  const springValue = useSpring(show, { stiffness: 300, damping: 30 });
  const bottomPos = useTransform(springValue, [0, 1], ["-14%", "0%"]);
  return (
    <>
      <motion.div
        style={{ bottom: bottomPos }}
        className={`absolute left-1/2 -translate-x-1/2 w-full bg-text text-foreground rounded-sm`}
      >
        <div className="flex flex-col gap-2 p-2">
          <p className={`text-2xl single-line header-font smooth-transition`}>
            {product.name.toWellFormed()}
          </p>
          <p className={"font-bold"}>${product.price}</p>
        </div>
      </motion.div>
    </>
  );
}

export default ProductInfo;
