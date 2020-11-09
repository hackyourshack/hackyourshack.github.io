// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const Tag: React.FC<TagProps> = ({ className, children }) => (
  <span
    className={`inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded ${className}`}
  >
    {children}
  </span>
);
