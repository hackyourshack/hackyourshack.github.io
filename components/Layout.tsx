import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
      <Header className={styles.header} />
      <div className={styles.page}>
        {children}
        <Footer className={styles.footer} />
      </div>
    </div>
  );
}
