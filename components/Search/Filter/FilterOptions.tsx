import { capitalize } from "@/lib/lib";
import { useSearchParamsStore } from "@/store/zustand";
import { Category } from "@/types";

function FilterOptions() {
  const searchParamsStore = useSearchParamsStore();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl header-font">Filter</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p>Category</p>
          <div className="flex flex-col gap-2">
            {Object.values(Category).map((category) => {
              return (
                <div key={category} className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="category"
                    id={category}
                    value={category}
                    checked={searchParamsStore.category === category}
                    radioGroup="categories"
                    onChange={() => searchParamsStore.setCategory(category)}
                  />
                  <label htmlFor={category} className=" cursor-pointer">
                    {capitalize(category)}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="">Price Range</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <input
                type="range"
                name="sort"
                id="ascending"
                min={0}
                max={9999}
                onChange={(e) =>
                  searchParamsStore.setPriceRange(
                    e.currentTarget.value,
                    searchParamsStore.maxPrice,
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
