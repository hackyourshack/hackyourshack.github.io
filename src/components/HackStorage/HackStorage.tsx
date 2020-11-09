// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { HackProposals } from "./HackProposals";
import { SearchBar } from "./SearchBar";

interface HackStorageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const HackStorage: React.FC<HackStorageProps> = ({ className }) => (
  <main className={`container flex flex-col h-screen ${className}`}>
    <SearchBar className="bg-accent-1" />
    <HackProposals className="flex-1 overflow-y-auto" />
  </main>
);
