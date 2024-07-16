import { PropsWithChildren, ReactElement } from "react";

const Heading = ({ children }: PropsWithChildren): ReactElement => (
  <h2 className="text-2xl font-bold tracking-tighter text-slate-800 dark:text-slate-200 sm:text-5xl">
    {children}
  </h2>
);

export default Heading;
