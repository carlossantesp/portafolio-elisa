import Link from "next/link";
import Phone from "../../icons/phone";
import Email from "../../icons/email";
import Instagram from "../../icons/instagram";
import Twitter from "../../icons/twitter";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <p className={styles.copy}>
        Hecho con ♥ de Elisa.
        <span> Copyright 2021 - Todos los derechos reservados.</span>
      </p>
      <nav className={styles.redesSociales}>
        <ul className={styles.social}>
          <li className={styles.socialItem}>
            <Link href="/">
              <a className={styles.socialLink}>
                <Phone />
              </a>
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link href="/">
              <a className={styles.socialLink}>
                <Email />
              </a>
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link href="/">
              <a className={styles.socialLink}>
                <Instagram />
              </a>
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link href="/">
              <a className={styles.socialLink}>
                <Twitter />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
