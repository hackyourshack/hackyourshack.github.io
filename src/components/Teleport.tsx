import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Draggable from "react-draggable";
import Logo from "@public/icons/logo.svg";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Teleport: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="absolute bottom-0 right-0 z-10 m-8 border-2 border-red-600">
      <Draggable axis="y">
        <div
          className={`z-50 fixed bottom-0 right-0 m-8 w-16 h-16 rounded-full bg-accent-1 font-black flex items-center justify-center ${className}`}
          {...props}
        >
          <Logo className="w-8 h-8" fill="white" />
        </div>
      </Draggable>
      <ul className="hidden text-xl border-2 border-blue-500">
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
  <li className="py-4 text-white">{children}</li>
);
