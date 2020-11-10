// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { UnderConstruction } from "@components/UnderConstruction";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SignInProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const SignIn: React.FC<SignInProps> = ({ className, children }) => (
  <main className={`${className}`}>
    <UnderConstruction title="Sign In" />
  </main>
);
