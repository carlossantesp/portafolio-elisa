import Head from "next/head";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portafolio web - Elisa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Navbar />
        </div>
        <main className={styles.container}>{children}</main>
        <footer className={styles.container}>Footer</footer>
      </div>
    </>
  );
}
