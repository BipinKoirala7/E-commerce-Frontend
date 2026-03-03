import { useSearchParamsStore } from "@/store/zustand";

function FilterOptions() {
  const searchParamsStore = useSearchParamsStore();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl header-font">Filter</p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="sort"
            id="all"
            value="all"
            radioGroup="categories"
            onClick={(e) =>
              searchParamsStore.setCategory(e.currentTarget.value)
            }
          />
          <label htmlFor="all" className=" cursor-pointer">
            All
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="sort"
            id="men"
            value="men"
            radioGroup="categories"
            onClick={(e) =>
              searchParamsStore.setCategory(e.currentTarget.value)
            }
          />
          <label htmlFor="men" className=" cursor-pointer">
            Men
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="sort"
            id="women"
            value="women"
            radioGroup="categories"
            onClick={(e) =>
              searchParamsStore.setCategory(e.currentTarget.value)
            }
          />
          <label htmlFor="women" className=" cursor-pointer">
            Women
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
