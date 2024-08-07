import { TagsListElement } from "../Tags/TagsListElement.tsx";
import React, { useContext, useState } from "react";
import { SelectedTagsContext } from "../../context/SelectedTagsContext.ts";

type TagsListProps = {
  inputValue: string;
  setInputValue: (v: string) => void
}

export const TagsList: React.FC<TagsListProps> = ({ inputValue, setInputValue }) => {
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);
  const { addTags } = useContext(SelectedTagsContext);
  const saveClickHandler = () => {
    setInputValue("");
    addTags(tagsToAdd);
  };

  return (
    <div>
      <ul className="text-sm font-medium text-gray-900 bg-white max-h-80 overflow-y-scroll">
        <TagsListElement inputValue={inputValue} tagsToAdd={tagsToAdd} setTagsToAdd={(tags) => setTagsToAdd(tags)} />
      </ul>
      <button type="button" disabled={tagsToAdd.length === 0} className="w-full text-white bg-blue-700 hover:bg-blue-800
      focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 my-3 focus:outline-none
      disabled:bg-gray-300 disabled:text-gray-400" onClick={saveClickHandler}>
        Zapisz
      </button>
    </div>
  );
};
