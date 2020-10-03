import styles from "./HeroBanner.module.css";

import Button from "../../utility/Button/Button";

const HeroBanner = ({ data, img }) => {
  const { headerSmall, headerLarge, paragraph, buttonLink, buttonText } = data;
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(https:${img})`,
          }}
        ></div>
        <div className={styles.content}>
          <h4
            dangerouslySetInnerHTML={{ __html: headerSmall }}
            className={styles.heading__small}
          />
          <h1
            dangerouslySetInnerHTML={{ __html: headerLarge }}
            className={styles.heading__large}
          />
          <p
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className={styles.paragraph}
          />
          <Button blue growShadow href={buttonLink}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
