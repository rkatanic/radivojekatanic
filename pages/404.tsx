import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { EffectCallback, useLayoutEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const EMOJIS = [
  "(o_O) ?",
  "(º～º)",
  "(⊙_☉)",
  "ヽ(O_O )ﾉ",
  "(>﹏<)",
  "(╯_╰)",
  "( ಠ_ಠ)",
  "(-__- )'",
];

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation();

  const [randomNumber, setRandomNumber] = useState<number>();

  useLayoutEffect((): ReturnType<EffectCallback> => {
    const newRandomNumber = Math.floor(Math.random() * EMOJIS.length);
    setRandomNumber(newRandomNumber);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {t("pageNotFoundTitle")}
        <span className="ml-2">
          {randomNumber !== undefined && EMOJIS[randomNumber]}
        </span>
      </h1>
      <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
        {t("pageNotFoundDescription")}
      </p>
      <Link
        href="/"
        className="inline-flex max-w-min flex-none items-center justify-center gap-2 whitespace-nowrap rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
        type="submit"
      >
        <FiArrowLeft /> {t("backToHome")}
      </Link>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default PageNotFound;
