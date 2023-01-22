import getConfig from "next/config";
import { DATE_FORMAT } from "utils/dateTimeUtils";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const { publicRuntimeConfig } = getConfig();
  const lastModifiedDate = DATE_FORMAT.format(
    new Date(publicRuntimeConfig.lastModifiedDate)
  );

  return (
    <div className="mt-12 w-full border-t py-6 text-sm">
      <div className="m-auto flex max-w-4xl items-center justify-between text-gray-400">
        <span>© {currentYear} Radivoje Katanic</span>
        <span>Last updated on {lastModifiedDate}</span>
      </div>
    </div>
  );
};

export default Footer;
