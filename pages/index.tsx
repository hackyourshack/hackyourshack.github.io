import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.description}>Homepage: Find some announcements here...</p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Handbook &rarr;</h3>
          <p>Have a look at the latest additions to the handbook.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Magazine &rarr;</h3>
          <p>The first magazine will come in February.</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
          <h3>Community &rarr;</h3>
          <p>Discover what your neighbours are up to.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
