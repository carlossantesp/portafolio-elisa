import Logo from "../Logo";
import Navbar from "../Navbar";
import Boton from "../Boton";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <Navbar />
      </nav>
      <div className={styles.curriculum}>
        <Boton dir="/" primary={true} tipo="link">
          CURRÍCULUM
        </Boton>
      </div>
    </header>
  );
}
