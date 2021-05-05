import { useEffect, useState } from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Boton from "../Boton";
import styles from "./Header.module.css";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScroll]);

  const styleBg = `${styles.header} ${scroll ? styles.active : ""}`;

  return (
    <header className={styleBg}>
      <div className="container">
        <div className={styles.brand}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <div className={styles.curriculum}>
          <Boton dir="/" primary={true} tipo="link" rounded={true}>
            <span>DESCARGAR</span> CURRÍCULUM
          </Boton>
        </div>
      </div>
    </header>
  );
}
