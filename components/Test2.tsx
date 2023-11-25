"use client";
import { useTranslation } from "next-i18next";

const Test2 = () => {
  const { t } = useTranslation("");
  return <div>{t("fullName")}</div>;
};

export default Test2;
