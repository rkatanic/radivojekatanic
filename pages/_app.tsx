import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className={font.className}>
      <Head>
        <title>Radivoje Katanic</title>
        <meta name="description" content="Software Developer" />
      </Head>
      {/* <ThemeProvider defaultTheme={"light"} attribute="class"> */}
      <Layout locale={pageProps?._nextI18Next?.initialLocale}>
        <Component {...pageProps} />
      </Layout>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default MyApp;
