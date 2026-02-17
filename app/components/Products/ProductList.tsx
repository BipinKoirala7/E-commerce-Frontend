import Product from "./Product";
import * as motion from "motion/react-client";
import {Variants} from "motion";

function ProductList() {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5
      }
    },
  }
  return (
    <motion.div
      className="grow w-full h-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </motion.div>
  );
}

export default ProductList;
