import Head from "next/head";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portafolio web - Elisa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.container}>Header</header>
        <main className={styles.container}>{children}</main>
        <footer className={styles.container}>Footer</footer>
      </div>
    </>
  );
}
