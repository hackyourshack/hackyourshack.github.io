import SearchIcon from "@public/icons/search.svg";

export default function HackStorage() {
  return (
    <main>
      <div className="container p-4 mx-auto bg-accent-1">
        <SearchBar />
        {/* {showFilters && <SearchFilters />} */}
      </div>
      {/* <SearchResults /> */}
    </main>
  );
}

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  children
}) => (
  <div className="relative text-accent-1">
    <input
      className="w-full h-12 pl-10 pr-4 text-lg shadow-lg focus:outline-none focus:shadow-outline"
      type="search"
      placeholder="Search..."
    />
    <button type="submit" className="absolute top-0 left-0 mt-3 ml-2">
      <SearchIcon className="w-6 h-6" fill="gray" />
    </button>
  </div>
);
