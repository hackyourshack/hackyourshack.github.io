// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <main className={`container flex flex-col h-screen ${className}`}>
      {children}
    </main>
  );
};
