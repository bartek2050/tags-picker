import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Chip = ({ children }: { children: string }) => {
  return (
    <div className="border-solid rounded-lg border-gray-400 border px-3 py-1 flex flex-row gap-3 items-center">
      <span className="font-bold">{children}</span>
      <FontAwesomeIcon icon={faX} size="xs" className="text-gray-500" />
    </div>
  );
};
