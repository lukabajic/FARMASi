import styles from "./Modal.module.css";

const Modal = ({ index, closeModal, changeImage, gallery }) => {
  const prev = index === 0 ? gallery.length - 1 : index - 1;
  const next = index === gallery.length - 1 ? 0 : index + 1;

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.close} onClick={closeModal}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={gallery[index].imgSrc}
          alt={gallery[index].imgAlt}
          className={styles.img}
        />
      </div>
      <div className={styles.arrows}>
        <div
          className={styles.arrow__left}
          onClick={(e) => {
            e.stopPropagation();
            changeImage(prev);
          }}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div
          className={styles.arrow__right}
          onClick={(e) => {
            e.stopPropagation();
            changeImage(next);
          }}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Modal;
