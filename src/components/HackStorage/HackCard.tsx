// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import MedalIcon from "@public/icons/medal.svg";
import StarIcon from "@public/icons/star.svg";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IconFilter } from "./IconFilter";

interface HackCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc: string;
  title: string;
  stars: number;
  approved: boolean;
}

export const HackCard: React.FC<HackCardProps> = ({
  className,
  children,
  imgSrc,
  title,
  stars,
  approved
}) => (
  <div className={`max-w-sm overflow-hidden shadow-lg ${className}`}>
    <img src={imgSrc} className="object-cover object-top w-full h-64" />
    <div className="px-6 py-2">
      <div className="w-auto flex flex-row ${className">
        {approved && (
          <IconFilter
            className="mr-6"
            size={1}
            icon={MedalIcon}
            count={1}
            selectedColor="#666"
          />
        )}
        {stars > 0 && (
          <IconFilter
            size={5}
            icon={StarIcon}
            count={stars}
            selectedColor="#666"
            unselectedColor="#ccc"
          />
        )}
      </div>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  </div>
);
