import Link from "next/link";

import styles from "./ShowcaseItem.module.css";

const ShowcaseItem = ({ imgSrc, imgAlt, headerLarge, headerSmall, href }) => {
  return (
    <Link href={href}>
      <a className={styles.wrapper}>
        <img src={imgSrc} alt={imgAlt || ""} className={styles.img} />
        <div className={styles.content}>
          {headerLarge && (
            <h1 className={styles.heading__large}>{headerLarge}</h1>
          )}
          {headerSmall && (
            <h3 className={styles.heading__small}>{headerSmall}</h3>
          )}
        </div>
      </a>
    </Link>
  );
};

export default ShowcaseItem;
