import Head from "next/head";

import styles from "../styles/Program.module.css";

import Section from "../components/utility/Section/Section";
import Container from "../components/utility/Container/Container";
import Layout from "../components/layout/Layout/Layout";

const SECTION_FIRST = {
  imgSrc: "./home/teamwork.png",
  imgAlt: "Timski rad",
  reverse: true,
  header: (
    <>
      <i>Motivactioni</i>
      <br />
      <s>program</s> <b>lojalnosti</b>
    </>
  ),
  text: (
    <>
      Nove prednosti
      <br />
      na putu ka uspehu
    </>
  ),
};

const Program = () => (
  <Layout>
    <Head>
      <title>FARMASi #štreberke</title>
    </Head>
    <Container>
      <main className={styles.main}>
        <Section {...SECTION_FIRST} />
        <section>
          <h2 className={styles.heading}>
            <span>Kako</span> funkcionise?
          </h2>
          <div className={styles.grid}>
            <div className={styles.item}>
              <div className={styles.circle}></div>
              <p className={styles.text}>
                Budi aktivan u aprilu i maju 2020. sa kumulativnim iznosom od
                5.500 DIN i{" "}
                <strong>
                  na prvu porudžbinu u <span> junu 2020.</span>
                  ostvari 33% popusta!
                </strong>
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}></div>
              <p className={styles.text}>
                Budi aktivan u junu, julu i avgustu 2020. sa kumulativnim
                iznosom od 10.000 DIN i{" "}
                <strong>
                  na prvu porudžbinu u <span> septembru 2020.</span>
                  ostvari 33% popusta!
                </strong>
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}></div>
              <p className={styles.text}>
                Budi aktivan u oktobru, novembru i decembru 2020. sa
                kumulativnim iznosom od 10.000 DIN i{" "}
                <strong>
                  na prvu porudžbinu u <span> januaru 2021.</span>
                  ostvari 33% popusta!
                </strong>
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}></div>
              <p className={styles.text}>
                Budi aktivan u februaru, martu i aprilu 2020. sa kumulativnim
                iznosom od 10.000 DIN i{" "}
                <strong>
                  na prvu porudžbinu u <span> maju 2021.</span>
                  ostvari 33% popusta!
                </strong>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  </Layout>
);

export default Program;
