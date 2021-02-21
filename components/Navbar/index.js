import Link from "next/link";
import styles from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link href="#hola">
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
  );
}
