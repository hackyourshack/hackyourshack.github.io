import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../svg/logo.svg";
import { Icon } from "./Icon";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <div className={styles.bar}>
        <div className={styles.tools}>
          <Title />
          <Search />
          <LanguageSelector />
          <ProfileButton />
        </div>
        <div className={styles.links}>
          <Link href="/storage">
            <a className={styles.link}>
              <Icon icon="hammer" title="Storage" />
            </a>
          </Link>
          <Link href="/community">
            <a className={styles.link}>
              <Icon icon="user-friends" title="Community" />
            </a>
          </Link>
          <Link href="/magazine">
            <a className={styles.link}>
              <Icon icon="book-open" title="Magazine" />
            </a>
          </Link>
          <Link href="/handbook">
            <a className={styles.link}>
              <Icon icon="book" title="Handbook" />
            </a>
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

const Title: React.FC = () => <div className={styles.title}>Hack Your Shack</div>;

const Search: React.FC = () => (
  <div className={styles.search}>
    <Icon icon="search" />
  </div>
);

const LanguageSelector: React.FC = () => (
  <div className={styles.languageSelector}>
    <Icon icon="globe-africa" />
  </div>
);

const ProfileButton: React.FC = () => (
  <div className={styles.profileButton}>
    <Icon icon="user" />
  </div>
);
