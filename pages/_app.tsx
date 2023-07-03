import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { siteMetadata } from "../config/siteMetadata";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{siteMetadata.site_title}</title>
        <meta name="description" content={siteMetadata.site_description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
