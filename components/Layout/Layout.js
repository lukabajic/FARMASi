import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <meta charset="utf-8" />
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
    </Head>
    {children}
  </>
);

export default Layout;
