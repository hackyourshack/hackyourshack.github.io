// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  imgSrc,
  imgAlt,
  title
}) => (
  <div className={`max-w-sm overflow-hidden shadow-lg ${className}`}>
    {!!imgSrc && <img className="w-full" src={imgSrc} alt={imgAlt} />}
    <div className="px-6 py-4">
      {!!title && <div className="mb-2 text-xl font-bold">{title}</div>}
      {children}
    </div>
  </div>
);
