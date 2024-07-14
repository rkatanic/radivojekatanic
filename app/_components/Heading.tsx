import { PropsWithChildren, ReactElement } from "react";

const Heading = ({ children }: PropsWithChildren): ReactElement => (
  <h2 className="text-3xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-200 sm:text-5xl">
    {children}
  </h2>
);

export default Heading;
