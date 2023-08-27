import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { LANGUAGES } from "constants/languages";
import Image from "next/image";
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
        className="flex items-center gap-2 rounded-md border border-slate-300 p-1 px-2 text-sm text-slate-600"
        onClick={handleDropdownToggle}
      >
        <Image
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.locale}-flag`}
          width={14}
          height={14}
          className="rounded-full border border-slate-300"
        />
        {selectedLanguage?.name}
        {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {isDropdownOpen && (
        <ul className="absolute top-8 w-full rounded-md border bg-white py-1 text-sm tracking-wide text-slate-600 shadow-md">
          {LANGUAGES.map((language) => (
            <li
              onClick={() => handleLanguageChange(language)}
              key={language.locale}
              className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 hover:text-slate-900"
            >
              <Image
                src={language.flag}
                alt={`${language.locale}-flag`}
                width={14}
                height={14}
                className="rounded-full border border-slate-300"
              />
              {language.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitch;
