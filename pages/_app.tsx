import type { AppProps } from "next/app";
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
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{ __html: isDarkModeActiveScript }}
    />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
