import { FiInfo } from "react-icons/fi";

interface Props {
  text: string;
}

const Note = ({ text }: Props) => (
  <div className="my-6 flex gap-3 rounded-lg bg-neutral-100/70 p-3 px-4">
    <FiInfo className="mt-1 h-4 w-4" />
    <div className="mb-0">{text}</div>
  </div>
);

export default Note;
