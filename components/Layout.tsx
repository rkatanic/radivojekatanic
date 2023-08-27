import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface Props {
  children: JSX.Element;
  locale: string;
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto flex min-h-screen flex-col justify-center gap-8 px-6">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between pb-8 pt-16">
        <div className="flex items-center gap-4">
          <Image
            src="/me.png"
            alt="my-photo"
            className="h-14 w-14 rounded-full bg-slate-200"
            width={256}
            height={256}
          />
          <div>
            <h3 className="text-lg font-semibold">{t("fullName")}</h3>
            <p className="text-slate-600">{t("role")}</p>
          </div>
        </div>
        <LanguageSwitch initiallocale={locale} />
      </div>
      <div className="mx-auto w-full max-w-2xl flex-1 border-slate-100 pb-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
