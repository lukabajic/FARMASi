import Head from "next/head";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, homePage }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Postani deo tima #štreberki. Zvanični sajt #FARMASi top tima. Besplatno učlanjenje."
      />
      <meta
        property="og:image"
        content="" // TODO: add image
      />
      <meta name="og:title" content="FARMASi #štreberke" />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
      ></script>
      {/* <script
        noModule=""
        src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
      ></script> */}
    </Head>
    <Header homePage={homePage} />
    {children}
    {/* <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> */}
    <Footer />
  </>
);

export default Layout;
