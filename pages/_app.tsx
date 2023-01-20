import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

import "../styles/globals.css";

const isDarkModeActiveScript = `
(() => {
  const isDarkModeActive =
    localStorage.getItem("isDarkMode") === "false" ? false : true;
  localStorage.setItem("isDarkMode", isDarkModeActive);

  if (isDarkModeActive) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
})();
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Radivoje Katanic</title>
      <meta name="description" content="Software Developer" />
    </Head>
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{ __html: isDarkModeActiveScript }}
    />
    {/* <div className="grid-lines fixed inset-0"></div> */}
    {/* <div className="dots fixed inset-0"></div> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
