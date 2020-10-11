import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hack Your Shack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Hack Your Shack</h1>
        <Link href="/storage">
          <a>Storage </a>
        </Link>
        <Link href="/community">
          <a>Community </a>
        </Link>
        <Link href="/magazine">
          <a>Magazine </a>
        </Link>
        <Link href="/handbook">
          <a>Handbook</a>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Good Spirit!
        </a>
      </footer>
    </div>
  );
}
