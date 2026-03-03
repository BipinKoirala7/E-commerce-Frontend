import React from "react";
import AdjustmentOptions from "../Home/AdjustmentOptions";
import CategoriesOptions from "../Home/CategoriesOptions";

function SearchFilters() {
  return (
    <div className="flex justify-between">
      <CategoriesOptions />
      <AdjustmentOptions />
    </div>
  );
}

export default SearchFilters;
