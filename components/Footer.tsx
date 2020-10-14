import Link from "next/link";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <Link href="/">
        <a target="_blank" rel="noopener noreferrer">
          Powered by Good Spirit!
        </a>
      </Link>
    </footer>
  );
};
