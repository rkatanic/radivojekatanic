import {
  FiBook,
  FiBriefcase,
  FiCalendar,
  FiFileText,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaLeaf, FaBiking, FaVideo, FaLaptop } from "react-icons/fa";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

const INTERESTS = [
  {
    icon: <FaBiking className="fill-slate-400 dark:fill-neutral-600" />,
    key: "sport",
  },
  {
    icon: <FaLeaf className="fill-slate-400 dark:fill-neutral-600" />,
    key: "gardening",
  },
  {
    icon: <FaVideo className="fill-slate-400 dark:fill-neutral-600" />,
    key: "movies",
  },
  {
    icon: <FaLaptop className="fill-slate-400 dark:fill-neutral-600" />,
    key: "freelancing",
  },
];

const About = (): JSX.Element => {
  const { t } = useTranslation("", { keyPrefix: "about" });
  const careerEntries = t("career.entries", {
    returnObjects: true,
  }) as Array<any>;
  const educationEntries = t("education.entries", {
    returnObjects: true,
  }) as Array<any>;

  return (
    <div className="flex flex-col gap-12 text-slate-800 dark:text-neutral-200">
      <div>
        <h3 className="mb-4 text-3xl font-semibold">{t("mainHeading")}</h3>
        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
          {t("mainDescription")}
        </p>
        <br />
        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
          <Trans
            i18nKey="currentJob"
            t={t}
            components={[
              <a
                key="company-link"
                className="border-b border-b-slate-400 font-medium hover:border-b-2 dark:border-neutral-400 dark:text-neutral-200"
                href="https://productdock.com/"
                target="_blank"
                rel="noreferrer noopener"
              />,
            ]}
          />
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6 dark:bg-neutral-800/40">
        <h3 className="mb-4 text-xl font-semibold">{t("technologies")}</h3>
        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
          {t("technologiesDescription")}
        </p>
        <div className="mt-4 flex gap-3 text-sm font-medium">
          <button className="flex h-9 items-center gap-2 rounded-lg bg-slate-800 p-1.5 px-4 text-white shadow-sm hover:bg-slate-900 hover:shadow-md dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-neutral-100">
            <FiFileText /> {t("downloadCV")}
          </button>
          <a
            href="mailto:rkatanic@outlook.com"
            className="flex h-9 items-center gap-2 rounded-lg border border-slate-300 bg-white p-1.5 px-4 shadow-sm hover:shadow-md dark:border-neutral-700/30 dark:bg-neutral-700/30 dark:hover:bg-neutral-700/50"
          >
            <FiMail />
            {t("letsTalk")}
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-6 text-xl font-semibold">{t("career.title")}</h3>
        <div className="flex flex-col gap-6">
          {careerEntries.map((entry, i) => (
            <div className="flex gap-4" key={i}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 dark:bg-neutral-800/70 dark:text-neutral-400">
                <FiBriefcase />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{entry.role}</h3>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex gap-4 text-slate-500  dark:text-neutral-500">
                      <p className="flex items-center gap-2">{entry.company}</p>
                      <p className="flex items-center gap-2">
                        <FiMapPin />
                        {t("location.city")}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-slate-500  dark:text-neutral-500">
                      <FiCalendar />
                      {entry.from} - {entry.to}
                    </p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed dark:text-neutral-300">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-6 text-xl font-semibold">{t("education.title")}</h3>
        <div className="flex flex-col gap-6">
          {educationEntries.map((entry, i) => (
            <div className="flex gap-4" key={i}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 dark:bg-neutral-800/70 dark:text-neutral-400">
                <FiBook />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{entry.role}</h3>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex gap-4 text-slate-500 dark:text-neutral-500">
                      <p className="flex items-center gap-2">{entry.company}</p>
                      <p className="flex items-center gap-2">
                        <FiMapPin />
                        {t("location.city")}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-slate-500 dark:text-neutral-500">
                      <FiCalendar />
                      {entry.from} - {entry.to}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-xl font-semibold">{t("interests.title")}</h3>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <span
              key={interest.key}
              className="flex h-10 max-w-min items-center gap-3 rounded-xl bg-slate-50 p-1 px-4 font-medium text-slate-800 shadow-sm dark:bg-neutral-800/50 dark:text-neutral-300"
            >
              {interest.icon}
              {t(`interests.${interest.key}`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
