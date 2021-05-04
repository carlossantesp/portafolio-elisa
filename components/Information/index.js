import styles from "./Information.module.css";
import ArrowDown from "../../icons/arrow-down";
import { Link } from "react-scroll";

export default function Information({ info }) {
  return (
    <section id="hola" className={styles.info}>
      <p className={styles.description}>{info}</p>
      <p className={styles.more}>Aquí hay algunos que me gustaría compartir.</p>
      <Link
        to="proyectos"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        exact="true"
        className={styles.link}
      >
        <ArrowDown />
      </Link>
    </section>
  );
}
