// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import SearchIcon from "@public/icons/search.svg";
import SliderIcon from "@public/icons/slider.svg";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { SearchFilter } from "./SearchFilter";

interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  children
}) => {
  const [showFilters, setFilters] = useState(false);

  return (
    <section className={`relative w-full p-3 ${className}`}>
      <button
        className="absolute p-3 focus:outline-none"
        onClick={() => setFilters((current) => !current)}
      >
        <SliderIcon className="w-6 h-6" fill="gray" />
      </button>
      <button
        type="submit"
        className="absolute right-0 p-3 pr-6 focus:outline-none"
      >
        <SearchIcon className="w-6 h-6" fill="gray" />
      </button>
      <input
        className="w-full h-12 px-12 text-lg rounded-sm shadow-lg w- text-accent-1 focus:outline-none focus:shadow-outline"
        type="search"
        placeholder="Search..."
      />
      {showFilters && <SearchFilter />}

      {children}
    </section>
  );
};
