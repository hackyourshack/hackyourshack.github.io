// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const Italic: React.FC<SpanProps> = ({ className, children }) => {
  return <span className={`italic ${className}`}>{children}</span>;
};
