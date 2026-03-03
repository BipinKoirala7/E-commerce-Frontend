import Filter from "./Filter/Filter";
import SortBy from "./SortBy/SortBy";

function SearchFilters() {
  return (
    <div className="flex justify-end">
      <Filter />
      <SortBy />
    </div>
  );
}

export default SearchFilters;
