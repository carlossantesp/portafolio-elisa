import Link from "next/link";
import Image from "next/image";
import Phone from "../../icons/phone";
import Email from "../../icons/email";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInformation}>
        <span className={styles.heroSay}>¡Hola a todos!</span>
        <h1 className={styles.heroTitle}>Soy Elisa</h1>
        <p className={styles.heroInfo}>
          Una Frontend Developer que le encanta implementar diseños que inspiran
          y atraen a las personas.
        </p>
        <ul className={styles.heroList}>
          <li className={styles.heroItem}>
            <Link href="/">
              <a className={styles.heroLink}>
                <Phone />
                (629) 555-0129
              </a>
            </Link>
          </li>
          <li className={styles.heroItem}>
            <Link href="/">
              <a className={styles.heroLink}>
                <Email />
                elisa@gmail.com
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.heroImagen}>
        <div className={styles.heroBox}>
          <Image
            src="/images/box-1.png"
            alt="Box green"
            width={500}
            height={398}
          />
        </div>
        <div className={styles.heroBox}>
          <Image
            src="/images/box-2.png"
            alt="Box purple"
            width={500}
            height={398}
          />
        </div>
        <Image
          src="/images/me.png"
          alt="Foto de Elisa"
          width={500}
          height={398}
        />
      </div>
    </section>
  );
}
