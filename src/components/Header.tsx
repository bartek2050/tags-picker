import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ header }: { header: string }) => {
  return (
    <div className="flex justify-between pb-2">
      <h1 className="h-1 font-bold">{header}</h1>
      <div><FontAwesomeIcon icon={faX} size="sm" /></div>
    </div>
  );
};
