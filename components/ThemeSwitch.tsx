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
        "group relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 px-2 text-sm text-slate-500 shadow-sm hover:text-slate-800",
        "dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
      )}
    >
      <div
        className={classNames(
          "invisible absolute right-[calc(100%+12px)] translate-y-1 rounded-lg p-1 px-2 text-sm font-medium opacity-0 transition-[transform,opacity]",
          "before:absolute before:-right-[4px] before:top-1/2 before:h-0 before:w-0 before:-translate-y-1/2 before:border-b-[5px] before:border-l-[5px] before:border-t-[5px] before:border-b-transparent before:border-t-transparent",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "bg-slate-800 text-slate-50 before:border-l-slate-800 dark:bg-neutral-200 dark:text-neutral-900 dark:before:border-l-neutral-200 "
        )}
      >
        {t("theme")}
      </div>
      <ImContrast />
    </button>
  );
};
export default ThemeSwitch;
