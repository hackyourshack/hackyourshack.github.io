// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  href?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  imgSrc,
  imgAlt,
  title,
  href
}) => {
  const content = [];
  if (imgSrc) {
    content.push(
      <img className="object-cover w-full h-48" src={imgSrc} alt={imgAlt} />
    );
  }
  content.push(
    <div className="px-6 py-4">
      {!!title && <div className="mb-2 text-xl font-bold">{title}</div>}
      {children}
    </div>
  );

  return (
    <div className={`max-w-sm overflow-hidden shadow-lg ${className}`}>
      {!!href ? <a href={href}>{content}</a> : content}
    </div>
  );
};
