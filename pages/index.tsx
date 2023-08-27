import { FiFile, FiImage, FiMapPin } from "react-icons/fi";
import { FaLeaf, FaCat, FaBiking, FaVideo, FaLaptop } from "react-icons/fa";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

const INTERESTS = [
  { icon: <FaBiking className="fill-blue-500" />, key: "sport" },
  { icon: <FaLeaf className="fill-teal-600" />, key: "gardening" },
  { icon: <FaCat className="fill-stone-700" />, key: "animals" },
  { icon: <FaVideo className="fill-red-600" />, key: "movies" },
  { icon: <FaLaptop className="fill-fuchsia-600" />, key: "freelancing" },
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
    <div className="flex flex-col gap-12 text-slate-800">
      <div>
        <h3 className="mb-4 text-3xl font-semibold">{t("mainHeading")}</h3>
        <p className="leading-relaxed text-slate-600">{t("mainDescription")}</p>
        <br />
        <p className="leading-relaxed text-slate-600">
          <Trans
            i18nKey="currentJob"
            t={t}
            components={[
              <a
                key="company-link"
                className="border-b border-b-sky-400 font-medium hover:border-b-2"
                href="https://productdock.com/"
                target="_blank"
                rel="noreferrer noopener"
              />,
            ]}
          />
        </p>
      </div>

      <div className="rounded-xl bg-slate-50 p-6">
        <h3 className="mb-4 text-xl font-semibold">{t("technologies")}</h3>
        <p className="leading-relaxed text-slate-600">
          {t("technologiesDescription")}
        </p>
        <div className="mt-4 flex gap-3 text-sm font-medium">
          <button className="rounded-md bg-slate-800 p-1.5 px-3 text-white shadow-sm hover:bg-slate-900 hover:shadow-md">
            {t("downloadCV")}
          </button>
          <a
            href="mailto:rkatanic@outlook.com"
            className="rounded-md border border-slate-300 bg-white p-1.5 px-3 shadow-sm hover:shadow-md"
          >
            {t("letsTalk")}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-semibold">{t("career.title")}</h3>
          <div className="flex flex-col gap-6 border-l border-slate-300 pl-4">
            {careerEntries.map((entry, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-3 before:absolute before:-left-5 before:top-1.5 before:z-10 before:h-2 before:w-2 before:rounded-full before:border before:border-slate-400 before:bg-slate-100 after:absolute after:-left-[26px] after:top-0 after:h-5 after:w-5 after:rounded-full after:bg-white"
              >
                <div className="flex items-center gap-6">
                  <p className="text-sm text-slate-500">
                    {entry.from} - {entry.to}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <FiMapPin />
                    {t("location.city")}
                  </p>
                </div>
                <p className="font-medium">{entry.role}</p>
                <p>{entry.company}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-semibold">{t("education.title")}</h3>
          <div className="flex flex-col gap-6 border-l border-slate-300 pl-4">
            {educationEntries.map((entry, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-3 before:absolute before:-left-5 before:top-1.5 before:z-10 before:h-2 before:w-2 before:rounded-full before:border before:border-slate-400 before:bg-slate-100 after:absolute after:-left-[26px] after:top-0 after:h-5 after:w-5 after:rounded-full after:bg-white"
              >
                <div className="flex items-center gap-6">
                  <p className="text-sm text-slate-500">
                    {entry.from} - {entry.to}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <FiMapPin />
                    {t("location.city")}
                  </p>
                </div>
                <p className="font-medium">{entry.role}</p>
                <p>{entry.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold">{t("interests.title")}</h3>
        <div className="flex flex-wrap gap-3">
          {INTERESTS.map((interest) => (
            <span
              key={interest.key}
              className="flex max-w-min items-center gap-2 rounded-full border border-slate-300 p-1 px-4 font-medium text-slate-600 shadow-sm"
            >
              {interest.icon}
              {t(`interests.${interest.key}`)}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold">{t("location.title")}</h3>
        <p className="flex items-center gap-2 text-slate-600">
          <FiMapPin className="fill-slate-100" />
          {`${t("location.city")}, ${t("location.state")}`}
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold">{t("files")}</h3>
        <div className="p-x4 rounded-xl border shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 font-medium">
              <FiFile
                className="fill-slate-100 stroke-slate-500"
                size="1.125rem"
              />
              {t("resume")}
              <div className="rounded-md bg-slate-100 p-1 px-3 text-xs tracking-wide text-slate-800">
                {t("pdf")}
              </div>
            </div>
            <p className="text-sm text-sky-500">{t("viewFile")}</p>
          </div>
          <hr className="my-4x" />
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 font-medium">
              <FiImage
                className="fill-slate-100 stroke-slate-500"
                size="1.125rem"
              />
              {t("myPhoto")}
              <div className="rounded-md bg-slate-100 p-1 px-3 text-xs tracking-wide text-slate-800">
                {t("image")}
              </div>
            </div>
            <p className="text-sm text-sky-500">{t("viewFile")}</p>
          </div>
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
