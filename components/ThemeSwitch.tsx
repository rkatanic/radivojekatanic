import { useState, useEffect, EffectCallback } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { ReactElement } from "react-markdown/lib/react-markdown";

const ThemeSwitch = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === "dark";

  useEffect((): ReturnType<EffectCallback> => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (): void => {
    if (isDarkTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="flex h-10 w-10 items-center justify-center gap-2 rounded-full text-xl text-neutral-900  hover:bg-neutral-100 dark:text-neutral-300"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeSwitch;
