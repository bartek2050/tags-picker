import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";
import classNames from "classnames";
import { SelectedTagsWrapper } from "../Tags/SelectedTagsWrapper.tsx";
import { CmsAiWrapper } from "../Tags/CmsAiWrapper.tsx";
import { SelectionMeterWrapper } from "../Tags/SelectionMeterWrapper.tsx";
import React, { useState } from "react";
import { TAGS } from "../../constants/tags.ts";

type TagsSearchWrapperProps = {
  showTagSearch: boolean | undefined,
  setShowTags: (v: boolean) => void
}

export const TagsSearchWrapper: React.FC<TagsSearchWrapperProps> = ({ showTagSearch, setShowTags }) => {
  const [focused, setFocused] = useState(false);
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = e.target.id;

    if (tagsToAdd.includes(e.target.id)) {
      setTagsToAdd(tagsToAdd.filter((e) => e !== checkedId));
    } else {
      setTagsToAdd([...tagsToAdd, checkedId]);
    }
  };

  const tagsList = TAGS.map((tag) => (
    <li key={tag.id} className="w-full border-b border-gray-200 rounded-t-lg">
      <div className="flex items-center ps-3">
        <input id={tag.name} type="checkbox" value="" onChange={(e) => handleChange(e)}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900">{tag.name}</label>
      </div>
    </li>
  ));

  return (
    <div
      className={classNames("shadow-md p-3 w-36 rounded min-w-80 divide-y divide-gray-800/10 divide-solid flex flex-col", {
        block: showTagSearch,
        hidden: !showTagSearch
      })}
    >
      <div className="mt-2">
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput setFocus={(e) => setFocused(e)} />
      </div>
      {!focused ? (
        <ul className="text-sm font-medium text-gray-900 bg-white max-h-80 overflow-scroll">
          {tagsList}
        </ul>
      ) : (
        <div className="divide-y divide-gray-800/10 divide-solid">
          <SelectedTagsWrapper />
          <CmsAiWrapper />
          <SelectionMeterWrapper />
        </div>
      )}
    </div>
  );
};
