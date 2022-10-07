/* eslint-disable react/no-unescaped-entities */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
      </style>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
