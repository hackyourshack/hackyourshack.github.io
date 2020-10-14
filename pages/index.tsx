import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.description}>Homepage: Find some announcements here...</p>
      <div className={styles.grid}>
        <Link href="/storage">
          <a className={styles.card}>
            <h3>Storage &rarr;</h3>
            <p>What do you want to build today?</p>
          </a>
        </Link>
        <Link href="/community">
          <a className={styles.card}>
            <h3>Community &rarr;</h3>
            <p>Discover what your neighbours are up to.</p>
          </a>
        </Link>
        <Link href="/magazine">
          <a className={styles.card}>
            <h3>Magazine &rarr;</h3>
            <p>The first magazine will come in February.</p>
          </a>
        </Link>
        <Link href="/handbook">
          <a className={styles.card}>
            <h3>Handbook &rarr;</h3>
            <p>Have a look at the latest additions to the handbook.</p>
          </a>
        </Link>
      </div>
    </main>
  );
}
