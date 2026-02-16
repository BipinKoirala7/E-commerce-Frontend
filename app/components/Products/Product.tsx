import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Product() {
  const image =
    "https://images.unsplash.com/photo-1680292783974-a9a336c10366?q=80&w=394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex flex-col gap-2 bg-foreground">
      <Image
        src={image}
        width={225}
        height={300}
        alt="A hoodie Picture"
        objectFit="cover"
        loading="lazy"
      />
      <p>Black Hoodie</p>
      <p>$65</p>
      <div className="flex gap-1">
        <FaStar className="text-[1rem] text-amber-600" />
        <FaStar className="text-[1rem] text-amber-600" />
        <FaStar className="text-[1rem] text-amber-600" />
        <FaStar className="text-[1rem] text-amber-600" />
        <FaStarHalf className="text-[1rem] text-amber-600" />
      </div>
    </div>
  );
}

export default Product;
