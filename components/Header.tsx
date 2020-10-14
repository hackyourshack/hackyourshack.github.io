import Link from "next/link";
import styles from "../styles/Header.module.css";
import logo from "../svg/logo.svg";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <div className={styles.bar}>
        <div className={styles.tools}>
          <Search />
          <LanguageSelector />
          <ProfileButton />
        </div>
        <div className={styles.links}>
          <Link href="/storage">
            <a className={styles.link}>Storage </a>
          </Link>
          <Link href="/community">
            <a className={styles.link}>Community </a>
          </Link>
          <Link href="/magazine">
            <a className={styles.link}>Magazine </a>
          </Link>
          <Link href="/handbook">
            <a className={styles.link}>Handbook</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

const Logo: React.FC = () => (
  <Link href="/">
    <img className={styles.logo} src={logo} width="40px" />
  </Link>
);
const Search: React.FC = () => <div className={styles.search}>Search</div>;
const LanguageSelector: React.FC = () => <div className={styles.languageSelector}>L</div>;
const ProfileButton: React.FC = () => <div className={styles.profileButton}>P</div>;
