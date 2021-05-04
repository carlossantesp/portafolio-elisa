import Link from "next/link";
import styles from "./Boton.module.css";

export default function Boton({
  children,
  tipo,
  primary,
  rounded = false,
  dir,
  icon = false,
}) {
  const stylesBtn = `${styles.btn} ${
    primary ? styles.btnPrimary : styles.btnSecondary
  } ${rounded && styles.btnRounded}
  ${icon && styles.btnIcon}`;
  return (
    <>
      {tipo === "link" ? (
        <Link href={dir}>
          <a
            className={stylesBtn}
            role="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        </Link>
      ) : (
        <button type="submit" className={stylesBtn} role="button">
          {children}
        </button>
      )}
    </>
  );
}
