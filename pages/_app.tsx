import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../globals.css";

const queryClient = new QueryClient();

const getDefaultThemeFromSystem = () => {
  if (typeof window !== "undefined") {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
    return matches ? "dark" : "light";
  }
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{`${t("fullName")} | ${t("role")}`}</title>
        <meta name="description" content={t("role")} />
      </Head>
      <ThemeProvider
        defaultTheme={getDefaultThemeFromSystem()}
        attribute="class"
      >
        <Layout locale={pageProps?._nextI18Next?.initialLocale}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp);
