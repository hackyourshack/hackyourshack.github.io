// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CommunityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Community: React.FC<CommunityProps> = ({
  className,
  children
}) => (
  <main className={`${className}`}>
    <h1>Community</h1>
    {children}
  </main>
);
