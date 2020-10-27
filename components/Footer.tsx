import Link from "next/link";
import { Icon } from "./Icon";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <Link href="/">
        <p>Powered by Good Spirit!</p>
      </Link>
      <p>
        Icons by
        <a target="_blank" href="https://fontawesome.com/">
          FontAwesome
        </a>
      </p>
    </footer>
  );
};
