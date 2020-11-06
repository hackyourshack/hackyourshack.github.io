import { DetailedHTMLProps, HTMLAttributes } from "react";
import Logo from "@public/icons/logo.svg";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const Teleport: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={`z-50 fixed bottom-0 right-0 m-8 w-10 h-10 rounded-full bg-accent-1 font-black flex items-center justify-center ${className}`}
      {...props}
    >
      <Logo className="w-6 h-6" fill="white" />
    </div>
  );
};
