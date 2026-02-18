"use client";

import Hoodie from "@/public/Hoodie.webp";
import Image from "next/image";
import * as motion from "motion/react-client";
import {Variants} from "motion";
import ProductInfo from "@/app/components/Products/ProductInfo";
import ProductActions from "@/app/components/Products/ProductActions";
import {useMotionValue} from "framer-motion";

function Product() {
  const show = useMotionValue(0);

  //  Product Card Variants. Don't change the name ("hidden" and "visible"). Inherited from parent.
  const variants: Variants = {
    //  Start at 10px from the bottom
    hidden: {opacity: 0, y: -10},
    visible: {opacity: 1, y: 0}
  }
  return (
    <motion.div
      onMouseEnter={() => show.set(1)}
      onMouseLeave={() => show.set(0)}
      variants={variants}
      className="relative flex flex-col rounded-lg border border-primary overflow-hidden cursor-pointer">
      <div className={"relative aspect-5/6"}>
        <Image
          src={Hoodie}
          alt="A hoodie image"
          fill
          className="object-cover"
          loading="eager"
        />
      </div>
      <ProductActions show={show}/>
      <ProductInfo show={show}/>
    </motion.div>
  );
}

export default Product;
