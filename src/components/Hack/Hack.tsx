// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HackProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  hackid: string;
}

export const Hack: React.FC<HackProps> = ({ className, hackid }) => {
  return (
    <main className={`${className}`}>
      <h1>Hack {hackid}</h1>
    </main>
  );
};
