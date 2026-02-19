"use client";

import { MotionValue, useSpring, useTransform } from "framer-motion";

type ProductInfoProps = {
  show: MotionValue<number>;
};

import IconButton from "@/app/components/ui/IconButton";
import { BsPatchPlus } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import * as motion from "motion/react-client";

function ProductActions({ show }: ProductInfoProps) {
  const springValue = useSpring(show, { stiffness: 300, damping: 30 });

  const rightPos = useTransform(springValue, [0, 1], ["-25%", "2.5%"]);
  const opacity = useTransform(springValue, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        style={{ opacity, right: rightPos }}
        className={"absolute top-[2.08%] flex flex-col gap-2"}
      >
        <div className={""}>
          <IconButton icon={<BsPatchPlus className="w-6 h-6" />} />
        </div>
        <div className={""}>
          <IconButton icon={<FaHeart className="w-6 h-6 text-green" />} />
        </div>
        <div className={""}>
          <IconButton icon={<FaRegHeart className="w-6 h-6" />} />
        </div>
      </motion.div>
    </>
  );
}

export default ProductActions;
