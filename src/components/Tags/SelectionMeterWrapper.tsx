import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const SelectionMeterWrapper = () => {
  const [selectedTags, setSelectedTags] = useState(["Maryla", "Przeboje", "Test", "Albert"]);

  const infoText = (selectedTags.length < 5)
    ? `Zbyt mało tagów. Dodaj jeszcze ${5 - selectedTags.length} aby poprawić widoczność artykułu`
    : "Dodałeś wystarczającą liczbę tagów";

  const isTagsMeterGreen = selectedTags.length > 3;
  const meterColor = isTagsMeterGreen ? "bg-lime-600" : "bg-rose-700";
  const textColor = isTagsMeterGreen ? "text-lime-600" : "text-rose-700";
  const meterText = isTagsMeterGreen ? "Dobrze" : "Słabo";

  return (
    <div className="pt-2">
      <div className="flex flex-row">
        <div className={`font-bold ${textColor}`}>{meterText}</div>
        <div className="flex flex-row gap-0.5 items-center ml-2">
          {selectedTags.map((_, index) => <div key={index} className={`w-3 h-1 ${meterColor} rounded`} />)}
          {Array.from({ length: 5 - selectedTags.length }).map((_, index) =>
            <div key={index} className={`w-3 h-1 bg-gray-500 rounded`} />)}
        </div>
      </div>
      <div className="text-gray-400 text-xs flex flex-row items-center gap-2 mt-2">
        <FontAwesomeIcon icon={faCircleInfo} size={"lg"} />
        <div>{infoText}</div>
      </div>
    </div>

  );
};
