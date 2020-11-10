// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { EventCard } from "@components/EventCard/EventCard";
import { UnderConstruction } from "@components/UnderConstruction";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CommunityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Community: React.FC<CommunityProps> = ({ className }) => (
  <main className={`${className}`}>
    <UnderConstruction title="Community" />
  </main>
);
