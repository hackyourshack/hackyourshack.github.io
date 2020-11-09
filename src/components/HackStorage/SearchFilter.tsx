// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import BadgeIcon from "@public/icons/medal.svg";
import StarIcon from "@public/icons/star.svg";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

interface SearchFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SearchFilter: React.FC<SearchFilterProps> = ({ className }) => (
  <div className={`mt-4 flex flex-row ${className}`}>
    <ApprovedFilter />
    <StarFilter />
  </div>
);

interface StarFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  stars?: number;
}

export const StarFilter: React.FC<StarFilterProps> = ({
  className,
  stars: initialStars = 0
}) => {
  const [stars, setStars] = useState(initialStars);
  return (
    <div className={`flex flex-row ${className}`}>
      <StarIcon
        fill={stars > 0 ? "orange" : "white"}
        onClick={() => (stars == 1 ? setStars(0) : setStars(1))}
      />
      <StarIcon
        fill={stars > 1 ? "orange" : "white"}
        onClick={() => setStars(2)}
      />
      <StarIcon
        fill={stars > 2 ? "orange" : "white"}
        onClick={() => setStars(3)}
      />
      <StarIcon
        fill={stars > 3 ? "orange" : "white"}
        onClick={() => setStars(4)}
      />
      <StarIcon
        fill={stars > 4 ? "orange" : "white"}
        onClick={() => setStars(5)}
      />
    </div>
  );
};

interface ApprovedFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ApprovedFilter: React.FC<ApprovedFilterProps> = ({
  className
}) => {
  const [on, setOn] = useState(false);
  return (
    <div className={`pr-6 ${className}`}>
      <BadgeIcon
        fill={on ? "orange" : "white"}
        onClick={() => setOn((current) => !current)}
      />
    </div>
  );
};
