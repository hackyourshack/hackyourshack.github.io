// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Page } from "@components/Page";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { HackProposals } from "./HackProposals";
import { SearchBar } from "./SearchBar";

interface HackStorageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const HackStorage: React.FC<HackStorageProps> = ({ className }) => (
  <Page className={className}>
    <SearchBar className="bg-accent-1" />
    <HackProposals className="flex-1 p-4 overflow-y-auto" />
  </Page>
);
