import Hoodie from "@/public/Hoodie.webp";
import Image from "next/image";
import {BsPatchPlus} from "react-icons/bs";
import {FaStar, FaStarHalf} from "react-icons/fa";
import IconButton from "@/app/components/ui/IconButton";
import * as motion from "motion/react-client";
import {Variants} from "motion";

function Product() {
  const variants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <motion.div
      variants={variants}
      className="relative flex flex-col rounded-lg bg-foreground border border-foreground overflow-hidden cursor-pointer">
      <div className={"relative aspect-5/6"}>
        <Image
          src={Hoodie}
          alt="A hoodie image"
          fill
          className="object-cover"
          loading="eager"
        />
      </div>
      <motion.div
        className="absolute bottom-[2.08%] left-1/2 -translate-x-1/2 w-[95%] flex flex-col gap-1 p-2 bg-foreground rounded-lg">
        <p>Green Hoodie</p>
        <p>$65</p>
        <div className="flex gap-1">
          <FaStar className="text-[1rem] text-amber-600"/>
          <FaStar className="text-[1rem] text-amber-600"/>
          <FaStar className="text-[1rem] text-amber-600"/>
          <FaStar className="text-[1rem] text-amber-600"/>
          <FaStarHalf className="text-[1rem] text-amber-600"/>
        </div>
      </motion.div>
      <motion.div className={"absolute top-[2.08%] right-[5%]"}>
        <IconButton icon={<BsPatchPlus className="w-6 h-6"/>}/>
      </motion.div>
    </motion.div>
  );
}

export default Product;
