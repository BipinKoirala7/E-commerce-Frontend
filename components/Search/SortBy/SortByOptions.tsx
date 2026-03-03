import { useSearchParamsStore } from "@/store/zustand";

function SortByOptions() {
  const searchParamsStore = useSearchParamsStore();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl header-font">Sort</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="sort"
              id="ascending"
              onClick={(e) =>
                searchParamsStore.setSortBy(e.currentTarget.value)
              }
              value="ascending"
            />
            <label htmlFor="ascending" className=" cursor-pointer">
              Ascending
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="sort"
              id="descending"
              onClick={(e) =>
                searchParamsStore.setSortBy(e.currentTarget.value)
              }
              value="descending"
            />
            <label htmlFor="descending" className=" cursor-pointer">
              Descending
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl header-font">By</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="ascending" className=" cursor-pointer">
              Price Range
            </label>
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
  );
}

export default SortByOptions;
