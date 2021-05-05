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
        <meta
          name="description"
          content="Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas."
        />
        <meta name="image" content="/images/page.png" />
        <meta property="og:title" content="Elisa - Frontend Developer" />
        <meta
          property="og:description"
          content="Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas."
        />
        <meta property="og:image" content="/images/page.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elisa - Frontend Developer" />
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
