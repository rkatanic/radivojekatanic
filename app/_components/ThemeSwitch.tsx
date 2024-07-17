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
      className="ml-4 h-5 w-5 flex-shrink-0 text-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
    >
      <CgEditContrast />
    </button>
  );
};

export default ThemeSwitch;