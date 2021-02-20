import Image from "next/image";
import styles from "./Testimonial.module.css";

export default function Testimonial({ testimonial }) {
  const { name, description, title, image } = testimonial;
  return (
    <article className={styles.testimonial}>
      <div className={styles.gradient}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={image}
              width={64}
              height={64}
              alt={name}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <p className={styles.description}>"{description}"</p>
          <p className={styles.title}>
            {name} / {title}
          </p>
        </div>
      </div>
    </article>
  );
}
