import CategoriesOptions from "./components/Home/CategoriesOptions";
import AdjustmentOptions from "./components/Home/AdjustmentOptions";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex justify-between">
        <CategoriesOptions />
        <AdjustmentOptions />
      </div>
      <div></div>
    </div>
  );
}
