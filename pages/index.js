import Head from "next/head";

import styles from "../styles/Home.module.css";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import HeroBanner from "../components/index/HeroBanner/HeroBanner";
import Section from "../components/utility/Section/Section";
import CatalogLink from "../components/index/CatalogLink/CatalogLink";
import ShowcaseItem from "../components/index/ShowcaseItem/ShowcaseItem";

const SECTION_FIRST = {
  buttonText: "Saznaj više",
  imgSrc: "./home/teamwork.png",
  imgAlt: "Timski rad",
  href: "/program",
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

const SECTION_ONE = {
  buttonText: "Pročitaj više",
  imgSrc: "./home/makeup.jpg",
  imgAlt: "Sminka iz FARMASi kolekcije",
  noImgSpacing: true,
  href: "/onama",
  header: (
    <>
      <i>FARMASi</i>
    </>
  ),
  text: (
    <>
      Nastojimo kupcima ponuditi najbolji odnos uloženog i dobijenog što je
      vodeća poslovna filozofija kozmetičke kompanije FARMASI.{" "}
      <b>Više od šest decenija uz pomoć tradicionalne</b> recepture i savremene
      tehnologije stičemo poverenje korisnika stvarajući proizvode namenjene
      celoj porodici.
    </>
  ),
};

const SECTION_TWO = {
  buttonText: "Pogledaj program",
  imgSrc: "./home/kreni-lako.jpg",
  imgAlt: "Rad od kuce",
  href: "/krenilako",
  blank: true,
  header: (
    <>
      <s>Kreni</s> <b>lako</b>
      <br />
      <i>Mi znamo kako</i>
    </>
  ),
  text: (
    <>
      Za nove i već
      <br />
      registrovane članove
    </>
  ),
};

const CATALOG = {
  imgSrc: "home/catalog.jpg",
  imgAlt: "Katalog Avgust 2020",
  date: "1.9. — 30.9.2020",
  href: "/katalog",
};

const SECOND_SHOWCASE = {
  imgSrc: "home/cowomen.jpg",
  imgAlt: "Preporuka",
  headerLarge: "preporukom",
  headerSmall: "do vrednog poklona",
  href: "/preporukom",
};

const Home = () => {
  return (
    <Layout homePage>
      <Head>
        <title>FARMASi #štreberke</title>
      </Head>
      <HeroBanner />
      <Container>
        <Section {...SECTION_ONE} />
        <Section {...SECTION_FIRST} />
        <Section {...SECTION_TWO} />
        <section className={styles.showcase}>
          <div className={styles.showcase__container}>
            <CatalogLink {...CATALOG} />
            <ShowcaseItem {...SECOND_SHOWCASE} />
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

export default Home;
