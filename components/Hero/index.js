import Socials from "../Socials";
import styles from "./Hero.module.css";

export default function Hero({ name, description, imageMe, redes }) {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src={imageMe} alt={`Foto de ${name}`} />
      </div>
      <div className={styles.information}>
        <span className={styles.say}>¡Hola a todos!</span>
        <h1 className={styles.title}>Soy {name}</h1>
        <p className={styles.description}>{description}</p>
        <div>
          <Socials redes={redes} />
        </div>
      </div>
    </section>
  );
}
