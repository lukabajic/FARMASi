import styles from "./Certificates.module.css";

import Container from "../../utility/Container/Container";

const Certificates = () => (
  <section className={styles.wrapper}>
    <Container>
      <h1 className={styles.heading}>&</h1>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src="onama/sertifikat1.jpg" alt="Sertifikat 1" />
        </div>
        <div className={styles.item}>
          <img src="onama/sertifikat2.jpg" alt="Sertifikat 2" />
        </div>
        <div className={styles.item}>
          <img src="onama/sertifikat3.jpg" alt="Sertifikat 3" />
        </div>
        <div className={styles.item}>
          <img src="onama/sertifikat4.jpg" alt="Sertifikat 4" />
        </div>
        <div className={styles.item}>
          <img src="onama/sertifikat5.jpg" alt="Sertifikat 5" />
        </div>
      </div>
      <div className={styles.container}>
        <img
          src="onama/sertifikati.jpg"
          alt="Sertifikati"
          className={styles.img}
        ></img>
      </div>
    </Container>
  </section>
);

export default Certificates;
