import Navigation from "./Navigation";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="about min-h-screen bg-gray-950 pb-20 text-gray-100">
    <Navigation />
    <div className="mx-auto mb-16 hidden h-72 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-200 via-emerald-300 to-blue-400 md:block">
      {/* <img
    src="https://img.freepik.com/free-vector/banner-with-low-poly-wireframe-abstract-design_1048-16123.jpg?w=1380&t=st=1683487219~exp=1683487819~hmac=7803aebd0c72528b98f44e37011796e62d29b8159577f20ec9e4685cfa78c05d"
    className="h-full w-full bg-cover opacity-50"
  /> */}
    </div>
    {children}
  </div>
);

export default Layout;
