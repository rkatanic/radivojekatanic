import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { LANGUAGES } from "constants/languages";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
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
    <div className="relative cursor-pointer select-none" ref={dropdownRef}>
      <div
        className="group flex h-10 items-center gap-2 rounded-full border border-slate-300 p-1 px-5 text-sm text-slate-600 shadow-sm hover:text-slate-800 dark:border-neutral-600  dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-200"
        onClick={handleDropdownToggle}
      >
        {selectedLanguage.name}
        <div className="-mr-1 flex h-5 flex-col">
          <FiChevronUp className="pointer-events-none dark:stroke-neutral-500 dark:group-hover:stroke-neutral-400" />
          <FiChevronDown className="pointer-events-none -mt-0.5 dark:stroke-neutral-500 dark:group-hover:stroke-neutral-400" />
        </div>
      </div>

      {isDropdownOpen && (
        <ul className="absolute top-12 w-full overflow-hidden rounded-2xl border bg-white py-2 text-sm tracking-wide text-slate-900 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
          {LANGUAGES.map((language) => (
            <li
              onClick={() => handleLanguageChange(language)}
              key={language.locale}
              className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-neutral-700/40 dark:hover:text-neutral-200"
            >
              {language.name}
              {selectedLanguage === language && (
                <FiCheck className="rounded-full stroke-slate-400 dark:stroke-neutral-400" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitch;
