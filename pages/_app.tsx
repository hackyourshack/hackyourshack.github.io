import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { initIconLibrary } from "../components/Icon";

initIconLibrary();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
