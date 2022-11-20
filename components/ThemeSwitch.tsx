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
      className="border w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 dark:border-gray-700 cursor-pointer group dark:hover:bg-gray-100 hover:bg-gray-900 shadow-md dark:shadow-black"
    >
      <RiContrastFill
        className="dark:fill-gray-100 dark:group-hover:fill-black group-hover:fill-white"
        size="1rem"
      />
    </button>
  );
};
export default ThemeSwitch;
