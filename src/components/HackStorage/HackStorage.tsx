// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SearchBar } from "./SearchBar";

interface HackStorageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const HackStorage: React.FC<HackStorageProps> = ({
  className,
  children
}) => (
  <main className={`container ${className}`}>
    <SearchBar className="bg-accent-1" />
    {children}
  </main>
);
