import Head from "next/head";

import styles from "../styles/Program.module.css";

import Section from "../components/utility/Section/Section";
import Container from "../components/utility/Container/Container";
import Layout from "../components/layout/Layout/Layout";

const Program = ({ data, imageUrl }) => {
  return (
    <Layout>
      <Head>
        <title>FARMASi #štreberke</title>
      </Head>
      <Container>
        <main className={styles.main}>
          <Section {...data.fields} imageUrl={imageUrl} />
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
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries/2eDlBPae3WpxL3d28Luy0G?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0"
  );
  const data = await res.json();
  const res2 = await fetch(
    `https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/assets/${data.fields.image.sys.id}?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0`
  );
  const imgData = await res2.json();

  return {
    props: {
      data,
      imageUrl: imgData.fields.file.url,
    },
  };
}

export default Program;
