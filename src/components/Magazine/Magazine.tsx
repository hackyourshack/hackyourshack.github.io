// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MagazineProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Magazine: React.FC<MagazineProps> = ({ className, children }) => (
  <main className={`${className}`}>
    <h1>Magazine</h1>
    {children}
  </main>
);
