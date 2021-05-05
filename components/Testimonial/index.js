import styles from "./Testimonial.module.css";

export default function Testimonial({ testimonial }) {
  const { name, description, title, image } = testimonial;
  return (
    <div className={styles.testimonial}>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <p className={styles.description}>"{description}"</p>
        <p className={styles.title}>
          {name} / {title}
        </p>
      </div>
    </div>
  );
}
