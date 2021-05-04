import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const title = "Portafolio web - Elisa";

export default function Layout({ children, redes }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <Header />
        <div className="container">
          <main className={styles.main}>{children}</main>
          <Footer redes={redes} />
        </div>
      </div>
    </>
  );
}
