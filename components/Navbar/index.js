import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-scroll";

const menuItems = [
  {
    path: "hola",
    name: "Hola",
  },
  {
    path: "proyectos",
    name: "Projectos",
  },
  {
    path: "contacto",
    name: "Hablemos",
  },
];

export default function Navbar() {
  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li className={styles.menuItem}>
          <Link
            to={item.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            activeClass={styles.active}
            className={styles.menuLink}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
