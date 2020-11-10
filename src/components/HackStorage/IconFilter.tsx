// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import StarIcon from "@public/icons/star.svg";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IconFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number;
  count?: number;
  icon?: any;
  unselectedColor?: string;
  selectedColor?: string;
  onChangeCount?(count: number): void;
}

export const IconFilter: React.FC<IconFilterProps> = ({
  className,
  size,
  count = 0,
  icon: Icon = StarIcon,
  unselectedColor = "white",
  selectedColor = "orange",
  onChangeCount = () => {}
}) => {
  const icons = [];
  for (let i = 0; i < size; i++) {
    icons.push(
      <Icon
        key={`icon_${i + 1}`}
        fill={count > i ? selectedColor : unselectedColor}
        onClick={() => onChangeCount(i + 1)}
      />
    );
  }
  return <div className={`flex flex-row ${className}`}>{icons}</div>;
};
