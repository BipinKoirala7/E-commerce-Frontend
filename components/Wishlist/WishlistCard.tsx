import { Product } from "@/types";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import { TiMinus } from "react-icons/ti";
import { BsPatchPlus } from "react-icons/bs";

type CartSmallCardProps = {
  product: Product;
};

function WishlistCard({ product }: CartSmallCardProps) {
  return (
    <div
      key={product.id}
      className="p-2 rounded-sm flex items-center space-x-4 overflow-hidden cursor-pointer hover:bg-primary smooth-transition"
    >
      <div className="w-full flex items-center gap-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="w-32 aspect-4/3 rounded object-cover"
        />
        <div className="w-full flex justify-between">
          <div className="relative flex flex-col gap-1 overflow-hidden">
            <p className="text-md font-medium single-line">{product.name}</p>
            <p className="text-sm text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div
            className={`h-full flex gap-2 p-1 items-center smooth-transition`}
          >
            <IconButton
              icon={<BsPatchPlus className="w-5 h-5" />}
              className="hover:bg-secondary"
            />
            <IconButton
              icon={<TiMinus className="w-5 h-5" />}
              className="hover:bg-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
