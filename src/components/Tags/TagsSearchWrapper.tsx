import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";
import classNames from "classnames";
import { SelectedTagsWrapper } from "../Tags/SelectedTagsWrapper.tsx";
import { CmsAiWrapper } from "../Tags/CmsAiWrapper.tsx";
import { TagsSelectionMeterWrapper } from "../Tags/TagsSelectionMeterWrapper.tsx";
import React, { useContext, useState } from "react";
import { TagsListElement } from "../Tags/TagsListElement.tsx";
import { SelectedTagsContext } from "../../context/SelectedTagsContext.ts";

type TagsSearchWrapperProps = {
  showTagSearch: boolean | undefined,
  setShowTags: (v: boolean) => void
}

export const TagsSearchWrapper: React.FC<TagsSearchWrapperProps> = ({ showTagSearch, setShowTags }) => {
  const [inputValue, setInputValue] = useState("");
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);
  const { addTags } = useContext(SelectedTagsContext);

  const saveClickHandler = () => {
    setInputValue("");
    addTags(tagsToAdd);
  };

  return (
    <div
      className={classNames("shadow-md p-3 w-36 rounded min-w-80 divide-y divide-gray-800/10 divide-solid flex flex-col", {
        block: showTagSearch,
        hidden: !showTagSearch
      })}
    >
      <div className="mt-2">
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput inputValue={inputValue} setInputValue={(v) => setInputValue(v)} />
      </div>
      {inputValue.length > 0 ? (
        <div>
          <ul className="text-sm font-medium text-gray-900 bg-white max-h-80 overflow-scroll">
            <TagsListElement inputValue={inputValue} tagsToAdd={tagsToAdd}
                             setTagsToAdd={(tags) => setTagsToAdd(tags)} />
          </ul>
          <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={saveClickHandler}>
            Zapisz
          </button>
        </div>
      ) : (
        <div className="divide-y divide-gray-800/10 divide-solid">
          <SelectedTagsWrapper />
          <CmsAiWrapper />
          <TagsSelectionMeterWrapper />
        </div>
      )}
    </div>
  );
};
