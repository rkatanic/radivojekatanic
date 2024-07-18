"use client";

import { useTheme } from "next-themes";
import { ReactElement } from "react";
import { CgEditContrast } from "react-icons/cg";

const ThemeSwitch = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const setThemeToLight = (): void => setTheme("light");
  const setThemeToDark = (): void => setTheme("dark");

  return (
    <button
      onClick={theme === "dark" ? setThemeToLight : setThemeToDark}
      className="ml-4 h-5 w-5 flex-shrink-0 text-xl text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
    >
      <CgEditContrast />
    </button>
  );
};

export default ThemeSwitch;
