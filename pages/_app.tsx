import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { appWithTranslation, useTranslation } from "next-i18next";

import "../globals.css";

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

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("fullName")} | ${t("role")}`}</title>
        <meta name="description" content={t("role")} />
      </Head>
      <script
        key="theme-script"
        dangerouslySetInnerHTML={{ __html: isDarkModeActiveScript }}
      />
      <Layout locale={pageProps?._nextI18Next?.initialLocale}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(MyApp);
