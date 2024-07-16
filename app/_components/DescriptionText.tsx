import { PropsWithChildren, ReactElement } from "react";

const DescriptionText = ({ children }: PropsWithChildren): ReactElement => (
  <p className="leading-7 text-slate-600 dark:text-slate-400 sm:text-xl sm:leading-8">
    {children}
  </p>
);

export default DescriptionText;
