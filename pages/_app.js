import { StaticKitProvider } from "@statickit/react";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <StaticKitProvider site="996bc82f2852">
    <Component {...pageProps} />
  </StaticKitProvider>
);

export default App;
