// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import Close from "@public/icons/close.svg";
import Logo from "@public/icons/logo.svg";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Teleport: React.FC<Props> = ({ className, ...props }) => {
  const [hidden, setHidden] = useState(true);
  function toggleHidden() {
    setHidden((current) => !current);
  }
  return (
    <div onClick={toggleHidden}>
      <div
        className={`z-50 fixed bottom-0 right-0 m-8 w-16 h-16 rounded-full bg-accent-1 font-black flex items-center justify-center ${className}`}
        {...props}
      >
        {hidden ? (
          <Logo className="w-8 h-8" fill="white" />
        ) : (
          <Close className="w-8 h-8" fill="white" />
        )}
      </div>
      <ul
        className={`${
          hidden ? "hidden" : "block"
        } absolute bottom-0 right-0 z-10 w-full pt-8 pb-24 pl-40 text-xl bg-blur-3-light text-accent-1`}
      >
        <Entry href="/sign-in">Sign In</Entry>
        <Entry href="/shack-tech">Shack Tech</Entry>
        <Entry href="/magazine">Magazine</Entry>
        <Entry href="/community">Community</Entry>
        <Entry href="/hack-storage">Hack Storage</Entry>
        <Entry href="/">Home</Entry>
      </ul>
    </div>
  );
};

interface EntryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  href?: string;
}

const Entry: React.FC<EntryProps> = ({ className, children, href = "/" }) => (
  <li className={`py-4 ${className}`}>
    <Link href={href}>{children}</Link>
  </li>
);
