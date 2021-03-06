// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { UnderConstruction } from "@components/UnderConstruction";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HandbookProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const ShackTech: React.FC<HandbookProps> = ({ className, children }) => (
  <main className={`${className}`}>
    <UnderConstruction title="Shack Tech" />
  </main>
);
