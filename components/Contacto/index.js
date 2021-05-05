import Boton from "../Boton";
import Title from "../Title";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contacto}>
      <Title>HABLEMOS</Title>
      <p className={styles.description}>
        Si está interesado en trabajar conmigo en su próximo proyecto, no dude
        en ponerse en contacto conmigo.
      </p>
      <form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>
            Nombre Completo <span>*</span>
          </label>
          <input
            className={styles.control}
            name="name"
            type="text"
            placeholder="Juan"
            required
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Correo electrónico <span>*</span>
          </label>
          <input
            className={styles.control}
            name="email"
            type="email"
            placeholder="juan@gmail.com"
            required
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="mensaje" className={styles.label}>
            Mensaje
          </label>
          <textarea
            className={styles.control}
            name="mensaje"
            rows="5"
          ></textarea>
        </div>
        <div className={styles.group}>
          <Boton tipo="button" primary={true} rounded={true}>
            ENVIAR MENSAJE
          </Boton>
        </div>
      </form>
    </section>
  );
}
