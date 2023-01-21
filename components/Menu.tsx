import NavLink from "./NavLink";

const Menu = (): JSX.Element => (
  <div className="h-16 w-full border-b bg-white shadow-md">
    <div className="m-auto flex h-full w-full max-w-3xl items-center justify-between">
      <div className="h-5 w-5 rounded-full border-4 border-gray-800"></div>
      <div className="flex">
        <NavLink link="/about" label="About" />
        <NavLink link="/contact" label="Contact" />
      </div>
    </div>
  </div>
);

export default Menu;
