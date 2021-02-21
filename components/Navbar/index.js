import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link
          to="hola"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          exact="true"
          className={styles.menuLink}
        >
          Hola
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          exact="true"
          className={styles.menuLink}
        >
          Proyectos
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          exact="true"
          className={styles.menuLink}
        >
          Hablemos
        </Link>
      </li>
    </ul>
  );
}
