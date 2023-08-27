import { useState, useEffect, EffectCallback } from "react";
import { FiSun } from "react-icons/fi";

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
      className="flex items-center justify-center rounded-full px-2 text-sm shadow-sm dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/10 dark:hover:text-slate-200"
    >
      <FiSun />
    </button>
  );
};
export default ThemeSwitch;
