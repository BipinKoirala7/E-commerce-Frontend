import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import WishlistSmallCard from "./WishlistSmallCard";
import IconButton from "../ui/IconButton";

function NavWishList() {
  const router = useRouter();
  const products: Product[] = [];

  const empty = (
    <div className="h-full flex items-center justify-center py-2">
      <p className="text-sm">Your wishlist is empty.</p>
    </div>
  );

  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <p className="text-xl header-font ml-1.5">WishList</p>
        <IconButton
          icon={<GoArrowUpRight className="w-5 h-5" />}
          className="hover:bg-primary"
          onClick={() => {
            router.push("/wishlist");
          }}
        />
      </div>
      {products.length === 0 ? (
        empty
      ) : (
        <div className="flex flex-col gap-2">
          {products.map((product) => (
            <WishlistSmallCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavWishList;
