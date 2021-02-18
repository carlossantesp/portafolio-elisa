import Link from "next/link";
import styles from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={styles.menuLink}>Hola</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#proyectos">
              <a className={styles.menuLink}>Proyectos</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#contacto">
              <a className={styles.menuLink}>Hablemos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.curriculum}>
        <Link href="/">
          <a className="btn btn-primary">CURRÍCULUM</a>
        </Link>
      </div>
    </header>
  );
}
