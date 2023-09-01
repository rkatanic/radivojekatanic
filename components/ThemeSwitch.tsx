import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useState, useEffect, EffectCallback } from "react";
import { ImContrast } from "react-icons/im";

const ThemeSwitch = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const { t } = useTranslation("");

  useEffect((): ReturnType<EffectCallback> => {
    setIsDarkMode(localStorage.getItem("isDarkMode") == "false" ? false : true);
  }, []);

  const hanleThemeToggle = (): void => {
    setIsDarkMode((prevState: boolean): boolean => {
      const isDarkModeActive = !prevState;
      localStorage.setItem("isDarkMode", isDarkModeActive.toString());

      if (isDarkModeActive) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return isDarkModeActive;
    });
  };

  return (
    <button
      onClick={hanleThemeToggle}
      className={classNames(
        "group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 px-2 text-sm text-slate-500 shadow-sm transition hover:border-slate-400 hover:text-slate-800",
        "dark:border-neutral-600 dark:text-neutral-500 dark:hover:border-neutral-500 dark:hover:text-neutral-200"
      )}
    >
      <div
        className={classNames(
          "invisible absolute left-12 translate-y-1 rounded-lg p-1 px-2 text-sm font-medium opacity-0 transition-[transform,opacity]",
          "before:absolute before:-left-1 before:top-1/2 before:h-0 before:w-0 before:-translate-y-1/2",
          "before:border-b-[6px] before:border-r-[6px] before:border-t-[6px] before:border-b-transparent before:border-t-transparent",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "bg-slate-800 text-slate-50 before:border-r-slate-800 dark:bg-neutral-200 dark:text-neutral-900 dark:before:border-r-neutral-200"
        )}
      >
        {t("theme")}
      </div>
      <ImContrast />
    </button>
  );
};
export default ThemeSwitch;
