import NavLink from "./NavLink";

const LINKS = [
  { link: "/", label: "About" },
  { link: "/labs", label: "Labs" },
  { link: "/contact", label: "Contact" },
];

const Header = (): JSX.Element => (
  <div className="m-auto w-full max-w-2xl flex items-center justify-between py-10 font-medium">
    <div className="dark:text-gray-200 text-gray-900 ">rkatanic</div>
    <div className="flex gap-4">
      {LINKS.map(({ link, label }) => (
        <NavLink key={link} link={link} label={label} />
      ))}
    </div>
  </div>
);

export default Header;
