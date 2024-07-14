import { PropsWithChildren, ReactElement } from "react";

const DescriptionText = ({ children }: PropsWithChildren): ReactElement => (
  <p className="leading-7 text-zinc-600 dark:text-zinc-400 sm:text-xl sm:leading-8">
    {children}
  </p>
);

export default DescriptionText;
