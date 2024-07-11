import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ header, setShowTags }: { header: string, setShowTags: (v: boolean) => void }) => {
  return (
    <div className="flex justify-between pb-2">
      <h1 className="h1 font-bold text-xl">{header}</h1>
      <button onClick={() => setShowTags(false)}><FontAwesomeIcon icon={faX} size="sm" /></button>
    </div>
  );
};
