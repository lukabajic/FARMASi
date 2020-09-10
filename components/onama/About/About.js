import styles from "./About.module.css";

import AboutText from "./AboutText/AboutText";

const About = () => (
  <section className={styles.wrapper}>
    <div className={styles.grid}>
      <figure className={styles.img}>
        <img src="onama/farmasi-svet.jpg" alt="Farmasi Svet" />
      </figure>
      <AboutText />
    </div>
  </section>
);

export default About;
