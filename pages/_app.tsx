import "../styles/globals.css";
import "../components/elements/icons/library";

import type { AppProps } from "next/app";
import DataProvider from "../context/data";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
export default MyApp;
