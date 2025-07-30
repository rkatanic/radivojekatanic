"use client";

import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";

const ThemeSwitch = (): ReactElement<any> | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const setThemeToLight = (): void => setTheme("light");
  const setThemeToDark = (): void => setTheme("dark");

  const isDarkTheme = theme === "dark";
  return (
    <button
      onClick={isDarkTheme ? setThemeToLight : setThemeToDark}
      className="mx-3 flex-shrink-0 text-xl text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="text-foreground size-4"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 18a6 6 0 0 0 0-12v12z" />
      </svg>
    </button>
  );
};

export default ThemeSwitch;
