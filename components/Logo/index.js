import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  const nameLogo = "LOGO";

  return (
    <Link href="/">
      <a className={styles.logo}>{nameLogo}</a>
    </Link>
  );
}
