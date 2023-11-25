import {
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";
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
    <div className="flex flex-col gap-12 text-slate-800 dark:text-zinc-200">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          {t("contactMe")}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {t("contactMeDescription")}
        </p>
      </div>
      <div className="flex gap-6">
        <form
          className="flex w-full flex-col gap-6"
          onSubmit={handleFormSubmit}
        >
          <input
            placeholder="Name"
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            type="email"
          />
          <input
            placeholder="E-mail"
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            type="email"
          />
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          <button
            className="inline-flex max-w-min flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
            type="submit"
          >
            <FiSend /> Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
