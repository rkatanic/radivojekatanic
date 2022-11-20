import { useState, useEffect, EffectCallback } from "react";
import { RiContrastFill } from "react-icons/ri";
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
      type="button"
      className="sm:border w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center rounded-full sm:bg-white sm:dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer group sm:dark:hover:bg-neutral-100 sm:hover:bg-neutral-900 sm:shadow-md sm:dark:shadow-black"
    >
      <RiContrastFill className="dark:fill-neutral-100 sm:dark:group-hover:fill-black sm:group-hover:fill-white w-5 h-5 sm:w-4 sm:h-4" />
    </button>
  );
};
export default ThemeSwitch;
