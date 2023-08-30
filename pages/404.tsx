import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
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

const PageNotFound = ({ randomNumber }: any): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-neutral-200">
        404 - {t("pageNotFoundTitle")}{" "}
        <span className="ml-2">{EMOJIS[randomNumber]}</span>
      </h1>
      <h3 className="leading-relaxed text-slate-600 dark:text-neutral-300">
        {t("pageNotFoundDescription")}
      </h3>
      <Link
        className="flex items-center gap-1 font-medium hover:underline"
        href="/"
      >
        <FiArrowLeft /> {t("backToHome")}
      </Link>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const randomNumber = Math.floor(Math.random() * EMOJIS.length);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      randomNumber,
    },
  };
}

export default PageNotFound;
