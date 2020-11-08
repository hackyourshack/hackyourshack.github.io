import Logo from "@public/icons/logo.svg";
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Teleport: React.FC<Props> = ({ className, ...props }) => {
  const [hidden, setHidden] = useState(true);
  function toggleHidden() {
    setHidden((current) => !current);
  }
  return (
    <div className="">
      <div
        onClick={toggleHidden}
        className={`z-50 fixed bottom-0 right-0 m-8 w-16 h-16 rounded-full bg-accent-1 font-black flex items-center justify-center ${className}`}
        {...props}
      >
        {hidden ? <Logo className="w-8 h-8" fill="white" /> : "X"}
      </div>
      <ul
        className={`${
          hidden ? "hidden" : "block"
        } absolute bottom-0 right-0 z-10 w-full pt-8 pb-24 pl-40 text-xl bg-blur-3-light text-accent-1`}
      >
        <Port>Sign in</Port>
        <Port>Handbook</Port>
        <Port>Magazine</Port>
        <Port>Community</Port>
        <Port>Hack Storage</Port>
        <Port>Home</Port>
      </ul>
    </div>
  );
};

interface PortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {}

const Port: React.FC<PortProps> = ({ children }) => (
  <li className="py-4">{children}</li>
);
