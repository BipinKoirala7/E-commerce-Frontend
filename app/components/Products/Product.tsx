import Hoodie from "@/public/Hoodie.webp";
import Image from "next/image";

function Product() {
  return (
    <div className="flex gap-2 p-2 rounded-lg bg-foreground">
      <Image
        src={Hoodie}
        alt="A hoodie image"
        className="object-cover cursor-pointer aspect-3/4"
        loading="eager"
      />
    </div>
  );
}

export default Product;

{
  /* <p>Black Hoodie</p>
    <p>$65</p> */
}
{
  /* <div className="flex gap-1">
      <FaStar className="text-[1rem] text-amber-600" />
      <FaStar className="text-[1rem] text-amber-600" />
      <FaStar className="text-[1rem] text-amber-600" />
      <FaStar className="text-[1rem] text-amber-600" />
      <FaStarHalf className="text-[1rem] text-amber-600" />
    </div> */
}
