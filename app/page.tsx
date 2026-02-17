import CategoriesOptions from "./components/Home/CategoriesOptions";
import AdjustmentOptions from "./components/Home/AdjustmentOptions";
import ProductList from "./components/Products/ProductList";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-4 px-8 pt-2 pb-16">
      <div className="flex justify-between">
        <CategoriesOptions/>
        <AdjustmentOptions/>
      </div>
      <ProductList/>
    </div>
  );
}
