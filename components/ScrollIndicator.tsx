import Menu from "./Menu";

const ScrollIndicator = (): JSX.Element => (
  <div className="w-40 absolute dark:text-zinc-200 -left-48">
    <Menu />
  </div>
);

export default ScrollIndicator;
