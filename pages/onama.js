import { useState } from "react";
import Head from "next/head";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import About from "../components/onama/About/About";
import Additional from "../components/onama/Additional/Additional";
import Certificates from "../components/onama/Certificates/Certificates";
import Modal from "../components/onama/Modal/Modal";
import TeamGallery from "../components/onama/TeamGallery/TeamGallery";

const TEAM_GALERY = [
  { imgSrc: "onama/team/0.jpg", imgAlt: "Slika 0" },
  { imgSrc: "onama/team/1.jpg", imgAlt: "Slika 1" },
  { imgSrc: "onama/team/2.jpg", imgAlt: "Slika 2" },
  { imgSrc: "onama/team/3.jpg", imgAlt: "Slika 3" },
  { imgSrc: "onama/team/4.jpg", imgAlt: "Slika 4" },
  { imgSrc: "onama/team/5.jpg", imgAlt: "Slika 5" },
  { imgSrc: "onama/team/6.jpg", imgAlt: "Slika 6" },
  { imgSrc: "onama/team/7.jpg", imgAlt: "Slika 7" },
  { imgSrc: "onama/team/8.jpg", imgAlt: "Slika 8" },
  { imgSrc: "onama/team/9.jpg", imgAlt: "Slika 9" },
  { imgSrc: "onama/team/10.jpg", imgAlt: "Slika 10" },
  { imgSrc: "onama/team/11.jpg", imgAlt: "Slika 11" },
  { imgSrc: "onama/team/12.jpg", imgAlt: "Slika 12" },
  { imgSrc: "onama/team/13.jpg", imgAlt: "Slika 13" },
  { imgSrc: "onama/team/14.jpg", imgAlt: "Slika 14" },
  { imgSrc: "onama/team/15.jpg", imgAlt: "Slika 15" },
  { imgSrc: "onama/team/16.jpg", imgAlt: "Slika 16" },
  { imgSrc: "onama/team/17.jpg", imgAlt: "Slika 17" },
  { imgSrc: "onama/team/18.jpg", imgAlt: "Slika 18" },
  { imgSrc: "onama/team/19.jpg", imgAlt: "Slika 19" },
  { imgSrc: "onama/team/20.jpg", imgAlt: "Slika 20" },
  { imgSrc: "onama/team/21.jpg", imgAlt: "Slika 21" },
  { imgSrc: "onama/team/22.jpg", imgAlt: "Slika 22" },
  { imgSrc: "onama/team/23.jpg", imgAlt: "Slika 23" },
];

const Onama = () => {
  const [modal, setModal] = useState(false);

  if (modal !== false) {
    return (
      <Layout>
        <Head>
          <title>O nama - FARMASi #štreberke</title>
        </Head>
        <div style={{ height: "100vh", width: "100%" }}></div>
        <Modal
          gallery={TEAM_GALERY}
          index={modal}
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
        <TeamGallery clicked={setModal} gallery={TEAM_GALERY} />
        <Additional />
        <Certificates />
      </Container>
    </Layout>
  );
};

export default Onama;
