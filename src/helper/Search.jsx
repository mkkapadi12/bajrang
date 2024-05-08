import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const SearchBar = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <form className="max-w-md sm:w-9/12" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="text"
          value={text.toLowerCase()}
          className="block w-full p-3 text-sm text-gray-900 border rounded-lg outline-none border-btn bg-gray-50 ps-10"
          placeholder="Search Mockups, Logos..."
          onChange={updateFilterValue}
          required
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchBar;
