"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";

function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  console.log(searchInput);
  return (
    <div className="flex gap-2 items-center rounded-sm bg-foreground pl-2 pr-4 py-2">
      <input
        type="text"
        className="h-full w-full border-none outline-none rounded-sm "
        placeholder="Search Products..."
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <MdOutlineClear
        className="h-full text-[1.5rem] cursor-pointer "
        onClick={() => setSearchInput("")}
        opacity={searchInput.length > 0 ? 0.5 : 0}
      />
      <FiSearch
        className="h-full text-[1.5rem] cursor-pointer"
        opacity={searchInput.length > 0 ? 1 : 0}
      />
    </div>
  );
}

export default Search;
