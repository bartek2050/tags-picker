import { TAGS } from "../../constants/tags.ts";
import React, { useContext } from "react";
import { SelectedTagsContext } from "../../context/SelectedTagsContext.ts";

type TagsListElementProps = {
  inputValue: string;
  tagsToAdd: string[];
  setTagsToAdd: (tags: string[]) => void
}

export const TagsListElement: React.FC<TagsListElementProps> = ({ inputValue, tagsToAdd, setTagsToAdd }) => {
  const { selectedTags } = useContext(SelectedTagsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = e.target.id;

    if (tagsToAdd.includes(e.target.id)) {
      setTagsToAdd(tagsToAdd.filter((e) => e !== checkedId));
    } else {
      setTagsToAdd([...tagsToAdd, checkedId]);
    }
  };

  if (TAGS.filter((tag) => tag.name.toLowerCase().includes(inputValue.toLowerCase())).length === 0) {
    return <p className="text-gray-400 text-sm pl-6 my-3">Brak pasujących tagów</p>;
  }

  //selected tags filtered out from main TAGS array
  const uniqueTagsList = TAGS.filter(tag => !selectedTags.includes(tag.name));

  return (
    uniqueTagsList.filter((tag) => tag.name.toLowerCase().includes(inputValue.toLowerCase())).map((tag) => (
      <li key={tag.id} className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center ps-3">
          <input id={tag.name} type="checkbox" value="" onChange={(e) => handleChange(e)}
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
          <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900">{tag.name}</label>
        </div>
      </li>
    )));
};
