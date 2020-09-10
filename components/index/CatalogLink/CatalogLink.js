import Link from "next/link";

import styles from "./CatalogLink.module.css";

const CatalogLink = ({ imgSrc, imgAlt, date, href }) => {
  return (
    <figure className={styles.wrapper}>
      <Link href={href}>
        <a target="_blank" className={styles.content}>
          <img src={imgSrc} alt={imgAlt} className={styles.img} />
          <div className={styles.text}>
            <h1 className={styles.heading}>katalog</h1>
            <h5 className={styles.date}>{date}</h5>
          </div>
        </a>
      </Link>
    </figure>
  );
};

export default CatalogLink;
