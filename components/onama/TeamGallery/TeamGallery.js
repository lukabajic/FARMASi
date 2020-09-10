import styles from "./TeamGallery.module.css";

const TeamGallery = ({ clicked, gallery }) => {
  const galleryImages = () =>
    gallery.map((image, index) => (
      <div className={styles.img__container} key={index}>
        <img
          src={image.imgSrc}
          alt={image.imgAlt}
          className={styles.img}
          onClick={() => clicked(index)}
        />
      </div>
    ));

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
