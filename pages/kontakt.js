import Head from "next/head";

import styles from "../styles/Kontakt.module.css";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import ContactForm from "../components/utility/ContactForm/ContactForm";

const Kontakt = () => {
  return (
    <Layout>
      <Head>
        <title>Kontakt - FARMASi #štreberke</title>
      </Head>
      <main className={styles.wrapper}>
        <Container>
          <h1 className={styles.heading}>
            Želite dodatne <span>informacije</span>?
          </h1>
          <h4 className={styles.heading__small}>
            Ukoliko imate bilo kakvih pitanja popunite formu ispod.
          </h4>
          <div className={styles.container}>
            <div className={styles.text}>
              <p className={styles.contact}>
                <strong>tel:</strong> +381 61 651 2750
              </p>
              <p className={styles.contact}>
                <strong>e-mail:</strong> olga@farmasi-streberke.rs
              </p>
              <p className={styles.contact}>
                <strong>web:</strong>{" "}
                <a href="https://farmasi-streberke.rs" target="_blank">
                  farmasi-streberke.rs
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Kontakt;
