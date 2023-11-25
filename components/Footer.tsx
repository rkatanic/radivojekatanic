import getConfig from "next/config";
import { DATE_FORMAT } from "utils/dateTimeUtils";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const { publicRuntimeConfig } = getConfig();
  const lastModifiedDate = DATE_FORMAT.format(
    new Date(publicRuntimeConfig.lastModifiedDate)
  );

  return (
    <div className="border-tx m-auto flex max-w-xl items-center justify-between py-12 text-sm text-neutral-500">
      <span>© {currentYear} Radivoje Katanic</span>
      <span className="">Last modified on {lastModifiedDate}</span>
    </div>
  );
};

export default Footer;
