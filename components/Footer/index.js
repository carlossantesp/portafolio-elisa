import Logo from "../Logo";
import Socials from "../Socials";
import Heart from "../../icons/heart";
import styles from "./Footer.module.css";

export default function Footer({ redes }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <p className={styles.copy}>
        Hecho con <Heart /> de Elisa.
        <span> Copyright 2021 - Todos los derechos reservados.</span>
      </p>
      <nav className={styles.redes}>
        <Socials redes={redes} />
      </nav>
    </footer>
  );
}
