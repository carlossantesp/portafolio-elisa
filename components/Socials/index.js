import Boton from "../Boton";
import Phone from "../../icons/phone";
import Email from "../../icons/email";
import Instagram from "../../icons/instagram";
import Twitter from "../../icons/twitter";
import styles from "./Socials.module.css";

const redesEnables = [
  { name: "phone", component: <Phone /> },
  { name: "email", component: <Email /> },
  { name: "instagram", component: <Instagram /> },
  { name: "twitter", component: <Twitter /> },
];

export default function Socials({ redes }) {
  return (
    <ul className={styles.social}>
      {redes.map((social, index) => (
        <li key={index} className={styles.item}>
          <Boton dir={social.url} primary={true} tipo="link" icon={true}>
            {redesEnables.find((red) => red.name === social.name).component}
          </Boton>
        </li>
      ))}
    </ul>
  );
}
