// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const H1: React.FC<HeadingProps> = ({ className, children }) => {
  return <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>;
};

export const H1s: React.FC<HeadingProps> = ({ className, children }) => {
  return <h1 className={`text-xl font-bold ${className}`}>{children}</h1>;
};

export const H2: React.FC<HeadingProps> = ({ className, children }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

export const H2s: React.FC<HeadingProps> = ({ className, children }) => {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
};

export const H3: React.FC<HeadingProps> = ({ className, children }) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

export const H3s: React.FC<HeadingProps> = ({ className, children }) => {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
};

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const Italic: React.FC<SpanProps> = ({ className, children }) => {
  return <span className={`italic ${className}`}>{children}</span>;
};
