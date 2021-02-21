import Link from "next/link";
import Phone from "../../icons/phone";
import Email from "../../icons/email";
import styles from "./Hero.module.css";

export default function Hero({ name, description, phone, email, imageMe }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInformation}>
        <span className={styles.heroSay}>¡Hola a todos!</span>
        <h1 className={styles.heroTitle}>Soy {name}</h1>
        <p className={styles.heroInfo}>{description}</p>
        <ul className={styles.heroList}>
          <li className={styles.heroItem}>
            <Link href={`https://api.whatsapp.com/send?phone=${phone}`}>
              <a className={styles.heroLink} target="_blank">
                <Phone />
                {phone}
              </a>
            </Link>
          </li>
          <li className={styles.heroItem}>
            <Link href={`mailto:${email}`}>
              <a className={styles.heroLink} target="_blank">
                <Email />
                {email}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.heroImagen}>
        <div className={styles.heroBox}>
          <img src="/images/box-1.png" alt="Box green" />
        </div>
        <div className={styles.heroBox}>
          <img src="/images/box-2.png" alt="Box purple" />
        </div>
        <img src={imageMe} alt={`Foto de ${name}`} />
      </div>
    </section>
  );
}
