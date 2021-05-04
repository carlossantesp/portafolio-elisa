import styles from "./Logo.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const nameLogo = "LOGO";

export default function Logo() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Link
      to="/"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      exact="true"
      className={styles.logo}
      onClick={toggleHome}
    >
      {nameLogo}
    </Link>
  );
}
