import { StaticKitProvider } from "@statickit/react";
import Head from "next/head";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <StaticKitProvider site="996bc82f2852">
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
    </Head>
    <Component {...pageProps} />
  </StaticKitProvider>
);

export default App;
