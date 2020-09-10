import styles from "./HeroBanner.module.css";

import Button from "../../utility/Button/Button";

const backgroundImage = "./home/hero__background.jpg";

const HeroBanner = () => (
  <div className={styles.hero}>
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.content}>
        <h4 className={styles.heading__small}>Postanite deo</h4>
        <h1 className={styles.heading__large}>
          <span className={styles.blue}>Top tima</span> #štreberki
          <br />
          <span className={styles.thin}>FARMASi Srbija</span>
        </h1>
        <p className={styles.paragraph}>
          Rastemo. Širimo mrežu kupaca, prodavaca i lidera.
        </p>
        <Button blue growShadow href="/klub">
          Kako do članstva?
        </Button>
      </div>
    </div>
  </div>
);

export default HeroBanner;
