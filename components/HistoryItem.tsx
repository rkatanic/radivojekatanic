import { TbBriefcase, TbSchool } from "react-icons/tb";

interface Props {
  type: "work" | "education";
  title: string;
  subtitle: string;
  description?: string;
}

const HistoryItem = ({ type, title, subtitle, description }: Props) => (
  <div className="mb-8 flex gap-4">
    {type === "work" ? (
      <TbBriefcase className="mt-1 h-5 w-5" />
    ) : (
      <TbSchool className="mt-1 h-5 w-5" />
    )}
    <div className="flex flex-1 flex-col gap-2">
      <h4 className="text-lg font-medium">{title}</h4>
      <h4 className="text-sm text-neutral-600">{subtitle}</h4>
      {description && <p className="mt-1">{description}</p>}
    </div>
  </div>
);

export default HistoryItem;
