import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const SelectionMeterWrapper = () => {
  const [selectedTags, setSelectedTags] = useState(["Maryla", "Przeboje", "Maryla", "Przeboje"]);


  return (
    <div className="pt-2">
      <div className="flex flex-row">
        <div className="text-lime-600 font-bold">Dobrze</div>
        <div className="flex flex-row gap-0.5 items-center ml-2">
          {selectedTags.map((index) => <div key={index} className="w-3 h-1 bg-lime-600 rounded" />)}
        </div>
      </div>
      <div className="text-gray-400 text-xs flex flex-row items-center gap-2 mt-2">
        <FontAwesomeIcon icon={faCircleInfo} size={"lg"} />
      </div>
    </div>

  );
};
