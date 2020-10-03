import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "../styles/Ponuda.module.css";

import Loader from "../components/utility/Loader/Loader";
import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import Button from "../components/utility/Button/Button";

const Ponuda = ({ catalogUrl }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (!images) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=slides"
        );
        const data = await res.json();
        setImages(data.includes.Asset);
      })();
    }
  }, [images]);

  const imageList = () =>
    images.map((image, index) => (
      <Link href={"https:" + catalogUrl} key={index}>
        <a className={styles.container} target="_blank">
          <img
            src={"https:" + image.fields.file.url}
            alt={image.fields.file.title}
            className={styles.img}
          />
        </a>
      </Link>
    ));

  return (
    <Layout>
      <Head>
        <title>Ponuda - FARMASi #štreberke</title>
      </Head>
      <Container>
        {images ? (
          <main className={styles.wrapper}>{imageList()}</main>
        ) : (
          <Loader />
        )}

        <Button blue growShadow href={"https:" + catalogUrl} blank center>
          Pogledaj katalog
        </Button>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=catalog"
  );
  const data = await res.json();

  return {
    props: {
      catalogUrl: data.includes.Asset[1].fields.file.url,
    },
  };
}

export default Ponuda;
