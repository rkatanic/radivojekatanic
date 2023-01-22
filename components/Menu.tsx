import NavLink from "./NavLink";

const Menu = (): JSX.Element => (
  <div className="m-auto flex h-full w-full items-center border-t px-6">
    <NavLink link="/about" label="About" />
  </div>
);

export default Menu;
