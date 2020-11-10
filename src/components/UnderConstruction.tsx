// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import ConstructionIcon from "@public/icons/logo.svg";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface UnderConstructionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  className,
  title
}) => {
  return (
    <main className={` ${className}`}>
      <div className="flex flex-col mt-64 align-middle justify-items-center">
        <h1 className="mx-auto text-2xl font-bold text-accent-1">{title}</h1>
        <ConstructionIcon className="w-48 h-48 mx-auto" fill="orange" />
        <h2 className="mx-auto text-xl font-bold text-accent-1">
          Page under construction
        </h2>
      </div>
    </main>
  );
};
