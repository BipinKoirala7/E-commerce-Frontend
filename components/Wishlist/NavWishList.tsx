import { Product } from "@/types";
import WishlistSmallCard from "./WishlistSmallCard";

function NavWishList() {
  const products: Product[] = [];

  const empty = (
    <div className="h-full flex items-center justify-center py-2">
      <p className="text-sm">Your wishlist is empty.</p>
    </div>
  );

  return (
    <div className="h-full flex flex-col gap-1">
      <p className="text-xl header-font ml-1.5">WishList</p>
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
