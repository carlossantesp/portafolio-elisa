import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";

export default function Layout({ children, redes }) {
  return (
    <>
      <Head>
        <title>Portafolio web - Elisa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
        </div>
        <main className={styles.container}>{children}</main>
        <div className={styles.container}>
          <Footer redes={redes} />
        </div>
      </div>
    </>
  );
}
