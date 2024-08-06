import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { SelectedTagsContext } from "../context/SelectedTagsContext.ts";

export const Chip = ({ children }: { children: string }) => {
  const { deleteTags } = useContext(SelectedTagsContext);

  return (
    <div className="border-solid rounded-lg border-gray-400 border px-3 py-1 flex flex-row gap-3 items-center">
      <span className="font-bold">{children}</span>
      <button onClick={() => deleteTags(children)}>
        <FontAwesomeIcon icon={faX} size="xs" className="text-gray-500" />
      </button>
    </div>
  );
};
