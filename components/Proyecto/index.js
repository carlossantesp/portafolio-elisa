import Title from "../Title";
import Boton from "../Boton";
import Github from "../../icons/github";
import Testimonial from "../Testimonial";
import styles from "./Proyecto.module.css";

export default function Proyecto({ proyecto }) {
  const { name, description, url, repo, image, testimonial } = proyecto;
  return (
    <article className={styles.wrapper}>
      <div className={styles.proyecto}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.information}>
          <Title>{name}</Title>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            <Boton dir={url} primary={true} tipo="link" rounded={true}>
              Ver Proyecto
            </Boton>
            <Boton dir={repo} tipo="link" rounded={true}>
              <Github /> Ver Código
            </Boton>
          </div>
        </div>
      </div>
      <Testimonial testimonial={testimonial} />
    </article>
  );
}
