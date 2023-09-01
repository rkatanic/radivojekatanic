import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {
  children: JSX.Element;
  locale: string;
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  return (
    <div className="relative mx-auto flex min-h-screen flex-col justify-center gap-16 px-6 py-16 text-slate-900 dark:bg-neutral-900 dark:text-neutral-200">
      <div className="mx-auto flex w-full max-w-2xl items-baseline justify-between">
        <div className="flex gap-6 font-medium">
          <Link
            href="/"
            className={classNames(
              "hover:text-slate-900 dark:hover:text-neutral-200",
              {
                "text-slate-500 dark:text-neutral-400": asPath !== "/",
              }
            )}
          >
            {t("home")}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitch initiallocale={locale} />
          <ThemeSwitch />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/me.png"
            alt="my-photo"
            className="h-28 w-28 rounded-full bg-slate-100 dark:bg-neutral-400"
            width={256}
            height={256}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">{t("fullName")}</h3>
            <p className="font-medium text-slate-700 dark:text-neutral-300">
              {t("role")}
            </p>
            <div className="flex items-center gap-4 text-slate-600 dark:text-neutral-400">
              <a
                href="mailto:rkatanic@outlook.com"
                className="group flex cursor-pointer items-center gap-2 hover:text-slate-900 hover:underline dark:hover:text-neutral-200"
              >
                <FiMail />
                rkatanic@outlook.com
              </a>
              <div className="h-4 w-px bg-slate-200 dark:bg-neutral-700"></div>
              <a
                href="https://github.com/rkatanic"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex cursor-pointer items-center gap-2 hover:text-slate-900 hover:underline dark:hover:text-neutral-200"
              >
                <FiGithub />
                {t("github")}
              </a>
              <div className="h-4 w-px bg-slate-200 dark:bg-neutral-700"></div>
              <a
                href="https://linkedin.com/in/radivoje-katanic"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex cursor-pointer items-center gap-2 hover:text-slate-900 hover:underline dark:hover:text-neutral-200"
              >
                <FiLinkedin />
                {t("linkedin")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl flex-1">{children}</div>
    </div>
  );
};

export default Layout;
