import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Ponuda.module.css";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import Button from "../components/utility/Button/Button";

const IMAGES = [
  {
    imgUrl: "/slide/slide1.jpg",
    imgAlt: "Strana Broj 1",
  },
  {
    imgUrl: "/slide/slide2.jpg",
    imgAlt: "Strana Broj 2",
  },
  {
    imgUrl: "/slide/slide3.jpg",
    imgAlt: "Strana Broj 3",
  },
  {
    imgUrl: "/slide/slide4.jpg",
    imgAlt: "Strana Broj 4",
  },
  {
    imgUrl: "/slide/slide5.jpg",
    imgAlt: "Strana Broj 5",
  },
  {
    imgUrl: "/slide/slide6.jpg",
    imgAlt: "Strana Broj 6",
  },
  {
    imgUrl: "/slide/slide7.jpg",
    imgAlt: "Strana Broj 7",
  },
  {
    imgUrl: "/slide/slide8.jpg",
    imgAlt: "Strana Broj 8",
  },
  {
    imgUrl: "/slide/slide9.jpg",
    imgAlt: "Strana Broj 9",
  },
  {
    imgUrl: "/slide/slide10.jpg",
    imgAlt: "Strana Broj 10",
  },
  {
    imgUrl: "/slide/slide11.jpg",
    imgAlt: "Strana Broj 11",
  },
  {
    imgUrl: "/slide/slide12.jpg",
    imgAlt: "Strana Broj 12",
  },
];

const Ponuda = () => {
  const imageList = () =>
    IMAGES.map((image, index) => (
      <Link href="/katalog" key={index}>
        <a className={styles.container} target="_blank">
          <img src={image.imgUrl} alt={image.imgAlt} className={styles.img} />
        </a>
      </Link>
    ));

  return (
    <Layout>
      <Head>
        <title>Ponuda - FARMASi #štreberke</title>
      </Head>
      <Container>
        <main className={styles.wrapper}>{imageList()}</main>
        <Button blue growShadow href="/katalog" blank center>
          Pogledaj katalog
        </Button>
      </Container>
    </Layout>
  );
};

export default Ponuda;
