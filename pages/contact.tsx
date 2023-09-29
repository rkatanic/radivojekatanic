import { FiSend } from "react-icons/fi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { useMutation } from "@tanstack/react-query";

export const postFormData = async (formData: any) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
const About = (): JSX.Element => {
  const { t } = useTranslation("", { keyPrefix: "" });
  const mutation = useMutation(postFormData);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    mutation
      .mutateAsync({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      })
      .then(() => {
        e.target.reset();
      });
  };

  return (
    <div className="flex flex-col gap-12 text-slate-800 dark:text-neutral-200">
      <div>
        <h3 className="mb-6 text-3xl font-semibold">{t("contactMe")}</h3>
        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
          {t("contactMeDescription")}
        </p>
      </div>
      <form
        action=""
        className="flex flex-col gap-8"
        onSubmit={handleFormSubmit}
      >
        <div className="relative">
          <input
            required
            type="text"
            id="name"
            name="name"
            className="border-1 peer block h-12 w-full appearance-none rounded-full border-neutral-300 bg-transparent px-4 text-neutral-900 focus:border-slate-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-neutral-300"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className={classNames(
              "absolute left-1 top-2 z-10 ml-2 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-slate-500 transition-[transform,scale] duration-300 ease-out",
              "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:text-slate-900 peer-focus:dark:text-neutral-300",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
              "dark:bg-neutral-900 dark:text-neutral-400"
            )}
          >
            {t("yourName")}
          </label>
        </div>
        <div className="relative">
          <input
            required
            type="text"
            id="email"
            name="email"
            className="border-1 peer block h-12 w-full appearance-none rounded-full border-neutral-300 bg-transparent px-4 text-neutral-900 focus:border-slate-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-neutral-300"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={classNames(
              "absolute left-1 top-2 z-10 ml-2 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-slate-500 transition-[transform,scale] duration-300 ease-out",
              "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:text-slate-900 peer-focus:dark:text-neutral-300",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
              "dark:bg-neutral-900 dark:text-neutral-400"
            )}
          >
            {t("yourEmail")}
          </label>
        </div>
        <div className="relative">
          <textarea
            required
            rows={7}
            id="message"
            name="message"
            className="border-1 peer block min-h-[12rem] w-full appearance-none rounded-3xl border-neutral-300 bg-transparent p-4 text-neutral-900 focus:border-slate-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-neutral-300"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className={classNames(
              "absolute left-1 top-2 z-10 ml-2 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-slate-500 transition-[transform,scale] duration-300 ease-out",
              "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:text-slate-900 peer-focus:dark:text-neutral-300",
              "peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
              "dark:bg-neutral-900 dark:text-neutral-400"
            )}
          >
            {t("yourMessage")}
          </label>
        </div>
        <button className="flex items-center gap-2 self-start rounded-full bg-slate-800 p-2.5 px-6 font-medium tracking-wide text-slate-50 dark:bg-neutral-200 dark:text-neutral-900">
          <FiSend />
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default About;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
