import { useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import About from "../components/onama/About/About";
import Additional from "../components/onama/Additional/Additional";
import Certificates from "../components/onama/Certificates/Certificates";
import Modal from "../components/onama/Modal/Modal";
import TeamGallery from "../components/onama/TeamGallery/TeamGallery";

const Onama = () => {
  const [modal, setModal] = useState(false);

  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (!gallery) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=gallery"
        );
        const data = await res.json();
        setGallery(data.includes.Asset);
      })();
    }
  }, [gallery]);

  if (modal !== false) {
    return (
      <Layout>
        <Head>
          <title>O nama - FARMASi #štreberke</title>
        </Head>
        <div style={{ height: "100vh", width: "100%" }}></div>
        <Modal
          index={modal}
          gallery={gallery}
          changeImage={setModal}
          closeModal={() => setModal(false)}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>O nama - FARMASi #štreberke</title>
      </Head>
      <Container>
        <About />
        <TeamGallery clicked={setModal} gallery={gallery} />
        <Additional />
        <Certificates />
      </Container>
    </Layout>
  );
};

export default Onama;
