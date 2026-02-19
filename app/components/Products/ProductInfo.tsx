"use client";

import { MotionValue, useSpring, useTransform } from "framer-motion";

type ProductInfoProps = {
  show: MotionValue<number>;
};

import * as motion from "motion/react-client";
import { FaStar, FaStarHalf } from "react-icons/fa";

function ProductInfo({ show }: ProductInfoProps) {
  const springValue = useSpring(show, { stiffness: 300, damping: 30 });
  const bottomPos = useTransform(springValue, [0, 1], ["-25%", "2.08%"]);
  const opacity = useTransform(springValue, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        style={{ opacity, bottom: bottomPos }}
        className="absolute left-1/2 -translate-x-1/2 w-[95%] flex flex-col gap-1 p-2 bg-foreground hover:bg-primary rounded-lg"
      >
        <p>Green Hoodie</p>
        <p className={"font-bold"}>$65</p>
        <div className="flex gap-1">
          <FaStar className="text-[1rem] text-star" />
          <FaStar className="text-[1rem] text-star" />
          <FaStar className="text-[1rem] text-star" />
          <FaStar className="text-[1rem] text-star" />
          <FaStarHalf className="text-[1rem] text-star" />
        </div>
      </motion.div>
    </>
  );
}

export default ProductInfo;
