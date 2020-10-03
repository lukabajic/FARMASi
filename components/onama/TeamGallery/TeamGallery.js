import { useEffect, useState } from "react";
import styles from "./TeamGallery.module.css";

import Loader from "../../utility/Loader/Loader";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const TeamGallery = ({ clicked }) => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (!gallery) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=gallery"
        );
        const data = await res.json();
        setGallery(data.includes.Asset);
      })();
    }
  }, [gallery]);

  const galleryImages = () =>
    gallery.map((image, index) => (
      <div className={styles.img__container} key={index}>
        <img
          src={"https:" + image.fields.file.url}
          alt={image.fields.file.fileName}
          className={styles.img}
          onClick={() => clicked(index)}
        />
      </div>
    ));

  if (!gallery) {
    return <Loader />;
  }

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        <span>Top</span> tim <i>#streberke</i>
      </h1>
      <div className={styles.grid}>{galleryImages()}</div>
    </section>
  );
};

export default TeamGallery;
