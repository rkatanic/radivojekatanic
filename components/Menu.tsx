import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";

const LINKS = [
  { link: "/", label: "About" },
  { link: "/labs", label: "Labs" },
  { link: "/contact", label: "Contact" },
];

const Menu = (): JSX.Element => {
  const menuRef = useRef<any>();
  const [showMenu, setshowMenu] = useState(false);

  const handleMenuToggle = (): void => {
    setshowMenu((prevState) => !prevState);
  };

  const handleClickOutside = (event: Event): void => {
    if (menuRef && !menuRef.current.contains(event.target)) {
      setshowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="flex gap-4 items-center relative">
      <button className="sm:hidden" onClick={handleMenuToggle} type="button">
        <FiMenu
          size="1.25rem"
          className="dark:stroke-neutral-100 dark:group-hover:stroke-black group-hover:stroke-white"
        />
      </button>

      <div className="hidden sm:flex gap-4">
        {LINKS.map(({ link, label }) => (
          <NavLink key={link} link={link} label={label} />
        ))}
      </div>
      <div
        className={`${
          showMenu ? "top-14" : "-top-40"
        } sm:hidden rounded-md absolute -right-4 bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow-lg dark:shadow-black p-6 py-4 gap-4 flex flex-col`}
      >
        {LINKS.map(({ link, label }) => (
          <NavLink
            onClick={handleMenuToggle}
            key={link}
            link={link}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
