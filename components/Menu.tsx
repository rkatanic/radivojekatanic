import { useState } from "react";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";

const LINKS = [
  { link: "/", label: "About" },
  { link: "/labs", label: "Labs" },
  { link: "/contact", label: "Contact" },
];

const Menu = (): JSX.Element => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenuToggle = (): void => {
    setshowMenu((prevState) => !prevState);
  };

  return (
    <div className="flex gap-4 items-center">
      {LINKS.map(({ link, label }) => (
        <NavLink key={link} link={link} label={label} />
      ))}
      <div className="lg:hidden">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Menu;
