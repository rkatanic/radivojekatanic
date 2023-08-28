import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { LANGUAGES } from "constants/languages";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useClickOutside } from "hooks/useClickOutside";

const LanguageSwitch = ({ initiallocale }: any): JSX.Element => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.find((language) => language.locale === initiallocale) ||
      LANGUAGES[0]
  );

  const handleDropdownToggle = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: any): void => {
    setSelectedLanguage(language);
    router.push(router.asPath, router.asPath, { locale: language.locale });
    handleDropdownToggle();
  };

  useClickOutside(dropdownRef, (): void => setIsDropdownOpen(false));

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      <div
        className="flex h-9 items-center gap-2 rounded-xl border border-slate-300 p-1 px-3 text-sm text-slate-600 shadow-sm hover:text-slate-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
        onClick={handleDropdownToggle}
      >
        {selectedLanguage.name}
        <div className="flex h-5 flex-col">
          <FiChevronUp className="pointer-events-none dark:stroke-neutral-500" />
          <FiChevronDown className="pointer-events-none -mt-0.5 dark:stroke-neutral-500" />
        </div>
      </div>

      {isDropdownOpen && (
        <ul className="absolute top-10 w-full overflow-hidden rounded-xl bg-white py-1 text-sm tracking-wide text-slate-600 shadow-lg dark:bg-neutral-800 dark:text-neutral-400">
          {LANGUAGES.map((language) => (
            <li
              onClick={() => handleLanguageChange(language)}
              key={language.locale}
              className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-neutral-700/40 dark:hover:text-neutral-200"
            >
              {language.name}
              {selectedLanguage === language && (
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-neutral-400"></div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitch;
