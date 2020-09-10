import Link from "next/link";

import styles from "./Footer.module.css";

import Container from "../../utility/Container/Container";

const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.primary}>
        <Link href="/">
          <a className={styles.brand}>
            <img
              src="/streberke-logo-2.png"
              alt="#streberke"
              className={styles.logo}
            />
            <h1 className={styles.thin}>#štreberke</h1>
          </a>
        </Link>
      </div>
      <hr className={styles.hr} />
      <p className={styles.copyright}>
        &copy; 2020 FARMASi, sva prava zadržana.
      </p>
    </Container>
  </footer>
);

export default Footer;
