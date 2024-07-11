import { useState } from "react";

export const SelectionMeterWrapper = () => {
  const [selectedTagsCount, setSelectedTagsCount] = useState(2);

  return (
    <div className="pt-2">
      <div className="text-lime-500 font-bold">Dobrze</div>
      {selectedTagsCount}
    </div>

  );
};
