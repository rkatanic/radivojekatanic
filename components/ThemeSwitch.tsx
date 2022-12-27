import { useState, useEffect, EffectCallback } from "react";
import { RiContrastFill } from "react-icons/ri";
import IconButon from "./IconButton";

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
    <IconButon
      onClick={hanleThemeToggle}
      icon={<RiContrastFill className="fill-gray-400" />}
      tooltip="Theme"
    />
  );
};
export default ThemeSwitch;
