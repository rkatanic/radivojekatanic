import { useState, useEffect, EffectCallback } from "react";
import { FiSun } from "react-icons/fi";
import { ImContrast } from "react-icons/im";

const ThemeSwitch = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

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
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 px-2 text-sm text-slate-600 shadow-sm hover:text-slate-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
    >
      <ImContrast />
    </button>
  );
};
export default ThemeSwitch;
