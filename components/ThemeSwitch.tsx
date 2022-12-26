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
    <label
      className="flex h-9 w-9 cursor-pointer items-center justify-center border border-gray-300 bg-slate-50 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:shadow-md"
      htmlFor="toggle"
    >
      <input
        onChange={hanleThemeToggle}
        className="peer sr-only"
        id="toggle"
        type="checkbox"
        checked={isDarkMode}
      />
      <RiContrastFill className="fill-gray-400" />
    </label>
  );
};
export default ThemeSwitch;
