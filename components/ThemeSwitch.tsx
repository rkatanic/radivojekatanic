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
      className="relative inline-flex cursor-pointer items-center"
      htmlFor="toggle"
    >
      <input
        onChange={hanleThemeToggle}
        className="peer sr-only"
        id="toggle"
        type="checkbox"
        checked={isDarkMode}
      />
      <div className="peer h-3 w-7 rounded-full bg-gray-200 after:absolute after:top-[5px] after:left-0 after:h-3.5 after:w-3.5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-0 dark:border-zinc-600 dark:bg-gray-600" />
      <span className="text-smx ml-3 tracking-wide dark:text-gray-300">
        Night Theme
      </span>
    </label>
  );
};
export default ThemeSwitch;
