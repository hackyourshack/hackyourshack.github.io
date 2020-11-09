// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Teleport } from "@components/Teleport";
import "@styles/index.css";
import "@styles/parallax.css";
import { AppProps } from "next/app";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>Hack Your Shack</title>
      </Head>
      <Component {...pageProps} />
      <Teleport />
    </>
  );
};

export default App;
