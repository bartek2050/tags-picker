import { Chip } from "../Chip.tsx";
import { useContext } from "react";
import { SelectedTagsContext } from "../../context/SelectedTagsContext.ts";

export const SelectedTagsWrapper = () => {
  const { selectedTags } = useContext(SelectedTagsContext);

  return (
    <div className="py-4 flex flex-wrap gap-2">
      {selectedTags.length === 0 ?
        <span className="text-gray-400 text-sm">Brak wybranych tagów</span> : selectedTags.map((e) =>
          <Chip
            key={e}>{e}</Chip>)}
    </div>
  );
};
