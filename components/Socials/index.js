import Link from "next/link";
import Phone from "../../icons/phone";
import Email from "../../icons/email";
import Instagram from "../../icons/instagram";
import Twitter from "../../icons/twitter";
import styles from "./Socials.module.css";

export default function Socials({ redes }) {
  const redesEnables = [
    { name: "phone", component: <Phone /> },
    { name: "email", component: <Email /> },
    { name: "instagram", component: <Instagram /> },
    { name: "twitter", component: <Twitter /> },
  ];
  return (
    <ul className={styles.social}>
      {redes.map((social, index) => (
        <li key={index} className={styles.item}>
          <Link href={social.url}>
            <a className={styles.link}>
              {redesEnables.find((red) => red.name === social.name).component}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
