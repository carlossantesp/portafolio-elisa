import Link from "next/link";
import styles from "./Boton.module.css";

export default function Boton({ children, tipo, primary, dir }) {
  return (
    <>
      {tipo === "link" ? (
        <Link href={dir}>
          <a
            className={`${styles.btn} ${
              primary ? styles.btnPrimary : styles.btnSecondary
            }`}
            role="link"
          >
            {children}
          </a>
        </Link>
      ) : (
        <button
          type="submit"
          className={`${styles.btn} ${
            primary ? styles.btnPrimary : styles.btnSecondary
          }`}
          role="button"
        >
          {children}
        </button>
      )}
    </>
  );
}
