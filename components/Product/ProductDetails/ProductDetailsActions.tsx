import IconButton from "@/components/ui/IconButton";
import { BsPatchPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

function ProductDetailsActions() {
  return (
    <div className="flex gap-4 items-center">
      <IconButton
        className="p-3 border border-primary"
        icon={<FaRegHeart className="w-8 h-8" />}
      />
      <button className="bg-text flex gap-4 items-center rounded-4xl border border-text px-4 py-3 text-white cursor-pointer">
        <BsPatchPlus className="w-8 h-8" />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

export default ProductDetailsActions;
