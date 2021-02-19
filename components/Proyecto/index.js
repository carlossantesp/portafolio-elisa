import Boton from "../Boton";
import Github from "../../icons/github";
// import Testimonial from "../Testimonial";
import styles from "./Proyecto.module.css";

export default function Proyecto({ proyecto }) {
  const { name, description, url, repo, image, testimonial } = proyecto;
  return (
    <section className={styles.proyecto}>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.enlaces}>
            <Boton dir={url} primary={true} tipo="link">
              Ver Proyecto
            </Boton>
            <Boton dir={repo} tipo="link">
              <Github /> Ver Código
            </Boton>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
      </article>
      {/* <Testimonial testimonial={testimonial} /> */}
    </section>
  );
}
