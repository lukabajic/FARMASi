import Link from "next/link";
import { useEffect, useState } from "react";

import Loader from "../../utility/Loader/Loader";

import styles from "./ShowcaseItem.module.css";

const ShowcaseItem = () => {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    if (!ctaData) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=callToAction"
        );
        const data = await res.json();
        setCtaData(data);
      })();
    }
  }, [ctaData]);

  if (!ctaData) {
    return <Loader />;
  }

  return (
    <Link href={ctaData.items[0].fields.link}>
      <a className={styles.wrapper}>
        <img
          src={"https:" + ctaData.includes.Asset[0].fields.file.url}
          alt={ctaData.items[0].fields.imgAlt || ""}
          className={styles.img}
        />
        <div className={styles.content}>
          <h1 className={styles.heading__large}>
            {ctaData.items[0].fields.headerLarge}
          </h1>
          <h3 className={styles.heading__small}>
            {ctaData.items[0].fields.headerSmall}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default ShowcaseItem;
