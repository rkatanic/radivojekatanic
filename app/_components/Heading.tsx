import { PropsWithChildren, ReactElement } from "react";

const Heading = ({ children }: PropsWithChildren): ReactElement => (
  <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
    {children}
  </h2>
);

export default Heading;
