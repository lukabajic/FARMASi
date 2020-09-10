import Head from "next/head";

import styles from "../styles/Preporukom.module.css";

import Section from "../components/utility/Section/Section";
import Container from "../components/utility/Container/Container";
import Layout from "../components/layout/Layout/Layout";

const SECTION = {
  imgSrc: "./refer.png",
  imgAlt: "Timski rad",
  reverse: true,
  header: (
    <>
      <s>Preporukom</s>
      <br />
      do <b>vrednih poklona</b>
    </>
  ),
  text: (
    <strong>
      Program traje
      <br />
      od 1.2.2020
      <br />
      do 31.7.2020
    </strong>
  ),
};

const Preporukom = () => (
  <Layout>
    <Head>
      <title>FARMASi #štreberke</title>
    </Head>
    <Container>
      <main className={styles.main}>
        <Section {...SECTION} />
        <section className={styles.program}>
          <div className={styles.option}>
            <p>
              Učlani{" "}
              <strong className={styles.uppercase}>
                minimalno 3 nova člana
              </strong>
              <br />
              u toku jedne kampanje, isprati ih
              <br />
              kroz prva tri koraka motivacionog
              <br />
              programa dobrodošlice
              <br />
              sa mnimalnom porudžbinom od
              <br />
              5.000 DIN i u 4. kampanji izaberi svoj
              <br />
              <strong className={styles.uppercase__large}>
                poklon paket u vrednosti
              </strong>
            </p>
            <div className={styles.reward}>6.0000 DIN*</div>
          </div>
          <div className={styles.option}>
            <p>
              Za{" "}
              <strong className={styles.uppercase}>
                5 i vise novih članova
              </strong>
              <br />
              u toku jedne kampanje, isprati ih
              <br />
              kroz prva tri koraka motivacionog
              <br />
              programa dobrodošlice
              <br />
              sa mnimalnom porudžbinom od
              <br />
              5.000 DIN i u 4. kampanji izaberi svoj
              <br />
            </p>
            <strong className={styles.uppercase__large}>
              poklon paket u vrednosti
            </strong>
            <div className={styles.reward}>12.000 DIN*</div>
          </div>
          <p className={styles.condition}>
            *Po ispunjenju uslova programa, proizvode (po sniženim
            <br /> kataločkim cenama) u poklon paketu član bira po želji.
          </p>
        </section>
      </main>
    </Container>
  </Layout>
);

export default Preporukom;
