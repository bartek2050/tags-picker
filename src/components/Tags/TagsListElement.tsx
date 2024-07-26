import { TAGS } from "../../constants/tags.ts";
import React, { useState } from "react";

export const TagsListElement = () => {
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = e.target.id;

    if (tagsToAdd.includes(e.target.id)) {
      setTagsToAdd(tagsToAdd.filter((e) => e !== checkedId));
    } else {
      setTagsToAdd([...tagsToAdd, checkedId]);
    }
  };

  return (
    TAGS.map((tag) => (
      <li key={tag.id} className="w-full border-b border-gray-200 rounded-t-lg">
        <div className="flex items-center ps-3">
          <input id={tag.name} type="checkbox" value="" onChange={(e) => handleChange(e)}
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
          <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900">{tag.name}</label>
        </div>
      </li>
    )));
};
