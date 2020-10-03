import Head from "next/head";

import styles from "../styles/Home.module.css";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import HeroBanner from "../components/index/HeroBanner/HeroBanner";
import Sections from "../components/utility/Section/Sections";
import CatalogLink from "../components/index/CatalogLink/CatalogLink";
import ShowcaseItem from "../components/index/ShowcaseItem/ShowcaseItem";

const Home = (props) => {
  return (
    <Layout homePage>
      <Head>
        <title>FARMASi #štreberke</title>
      </Head>
      <HeroBanner
        data={props.heroData.items[0].fields}
        img={props.heroData.includes.Asset[0].fields.file.url}
      />
      <Container>
        <Sections />
        <section className={styles.showcase}>
          <div className={styles.showcase__container}>
            <CatalogLink />
            <ShowcaseItem />
          </div>
        </section>
        <section className={styles.logotip}>
          <Container>
            <img
              src="home/logotipi-farmasi.png"
              alt="Logotipi"
              className={styles.logotip__img}
            />
          </Container>
        </section>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const heroRes = await fetch(
    "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=hero"
  );
  const heroData = await heroRes.json();

  return {
    props: {
      heroData,
    },
  };
}

export default Home;
