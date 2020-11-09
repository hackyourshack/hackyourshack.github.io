// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SignInProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const SignIn: React.FC<SignInProps> = ({ className, children }) => (
  <main className={`${className}`}>
    <h1>Sign In</h1>
    {children}
  </main>
);
