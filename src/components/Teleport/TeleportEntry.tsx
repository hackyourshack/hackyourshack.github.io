// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TeleportEntryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  href?: string;
}

export const TeleportEntry: React.FC<TeleportEntryProps> = ({
  className,
  children,
  href = "/"
}) => (
  <li className={`py-4 ${className}`}>
    <Link href={href}>{children}</Link>
  </li>
);
