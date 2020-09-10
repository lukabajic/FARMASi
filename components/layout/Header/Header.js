import { useState } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const whiteLogo = "./logos/farmasi-logo-light.png";
const darkLogo = "./logos/logo.png";

import HeaderToggler from "./HeaderToggler/HeaderToggler";
import Navigation from "./Navigation/Navigation";

const Header = ({ homePage }) => {
  const [navOpen, setNavOpen] = useState(false);

  let brand = (
    <a className={styles.brand}>
      <img src={darkLogo} className={styles.logo} alt="FARMASi" />
    </a>
  );
  if (homePage) {
    brand = (
      <a className={styles.brand}>
        <img
          src={whiteLogo}
          className={[styles.logo, styles.logo__light].join(" ")}
          alt="FARMASi"
        />
        <img
          src={darkLogo}
          className={[styles.logo, styles.logo__dark].join(" ")}
          alt="FARMASi"
        />
      </a>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">{brand}</Link>
        <Navigation isNavOpen={navOpen} />
        <HeaderToggler
          clicked={() => setNavOpen(!navOpen)}
          isNavOpen={navOpen}
          homePage={homePage}
        />
      </div>
    </header>
  );
};

export default Header;
