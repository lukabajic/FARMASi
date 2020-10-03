import styles from "./TeamGallery.module.css";

import Loader from "../../utility/Loader/Loader";

const TeamGallery = ({ clicked, gallery }) => {
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
