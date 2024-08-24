import NavLink from "./NavLink";

const Navigation = () => (
  <header className="mb-28 flex gap-6">
    <NavLink href={"/"} label={"About"} />
    <NavLink href={"/contact"} label={"Contact"} />
  </header>
);

export default Navigation;
