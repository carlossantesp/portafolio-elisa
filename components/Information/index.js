import Link from "next/link";
import styles from "./Information.module.css";
import ArrowDown from "../../icons/arrow-down";

export default function Information() {
  return (
    <section id="hola" className={styles.info}>
      <p className={styles.infoDescripcion}>
        A lo largo de mi carrera como Frontend, he tenido el privilegio de
        trabajar en proyectos retadores e increíbles
      </p>
      <p className={styles.infoProjectos}>
        Aquí hay algunos que me gustaría compartir.
      </p>
      <Link href="#proyectos">
        <a className={styles.infoLink}>
          <ArrowDown />
        </a>
      </Link>
    </section>
  );
}
