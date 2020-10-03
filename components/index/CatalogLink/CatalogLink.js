import Link from "next/link";
import { useEffect, useState } from "react";

import Loader from "../../utility/Loader/Loader";

import styles from "./CatalogLink.module.css";

const CatalogLink = () => {
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    if (!catalog) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=catalog"
        );
        const data = await res.json();
        setCatalog(data);
      })();
    }
  }, [catalog]);

  if (!catalog) {
    return <Loader />;
  }

  return (
    <figure className={styles.wrapper}>
      <Link href={"https:" + catalog.includes.Asset[1].fields.file.url}>
        <a target="_blank" className={styles.content}>
          <img
            src={"https:" + catalog.includes.Asset[0].fields.file.url}
            alt={catalog.items[0].fields.month}
            className={styles.img}
          />
          <div className={styles.text}>
            <h1 className={styles.heading}>katalog</h1>
            <h5 className={styles.date}>{catalog.items[0].fields.date}</h5>
          </div>
        </a>
      </Link>
    </figure>
  );
};

export default CatalogLink;
