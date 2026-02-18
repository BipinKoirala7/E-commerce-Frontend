"use client";

import * as motion from "motion/react-client";
import {FaHeart, FaRegHeart, FaStar, FaStarHalf} from "react-icons/fa";
import IconButton from "@/app/components/ui/IconButton";
import {BsPatchPlus} from "react-icons/bs";
import {useMotionValue} from "framer-motion";

function ProductOptions() {
  const show = useMotionValue(false);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  return (
    <>
      <motion.div
        variants={variants}
        className="absolute bottom-[2.08%] left-1/2 -translate-x-1/2 w-[95%] flex flex-col gap-1 p-2 bg-foreground hover:bg-primary rounded-lg smooth-transition">
        <p>Green Hoodie</p>
        <p className={"font-bold"}>$65</p>
        <div className="flex gap-1">
          <FaStar className="text-[1rem] text-star"/>
          <FaStar className="text-[1rem] text-star"/>
          <FaStar className="text-[1rem] text-star"/>
          <FaStar className="text-[1rem] text-star"/>
          <FaStarHalf className="text-[1rem] text-star"/>
        </div>
      </motion.div>
      <motion.div className={"absolute top-[2.08%] right-[2.5%] flex flex-col gap-2"}>
        <div className={""}>
          <IconButton icon={<BsPatchPlus className="w-6 h-6"/>}/>
        </div>
        <div className={""}>
          <IconButton
            icon={<FaHeart className="w-6 h-6 text-green"/>}/>
        </div>
        <div className={""}>
          <IconButton
            icon={<FaRegHeart className="w-6 h-6"/>}/>
        </div>
      </motion.div>
    </>
  )
}

export default ProductOptions;