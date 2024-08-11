import { Header } from "../Header";
import { SearchInput } from "..//Tags/SearchInput.tsx";
import classNames from "classnames";
import { SelectedTagsWrapper } from "../Tags/SelectedTagsWrapper.tsx";
import { CmsAiWrapper } from "../Tags/CmsAiWrapper.tsx";
import { TagsSelectionMeterWrapper } from "../Tags/TagsSelectionMeterWrapper.tsx";
import React, { useState } from "react";
import { TagsList } from "../Tags/TagsList.tsx";

type TagsSearchWrapperProps = {
  showTagSearch: boolean | undefined,
  setShowTags: (v: boolean) => void
}

export const TagsSearchWrapper: React.FC<TagsSearchWrapperProps> = ({ showTagSearch, setShowTags }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={classNames("shadow-md p-3 w-36 rounded min-w-80 divide-y divide-gray-800/10 divide-solid flex flex-col absolute left-16", {
        block: showTagSearch,
        hidden: !showTagSearch
      })}
    >
      <div className="mt-2">
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput inputValue={inputValue} setInputValue={(v) => setInputValue(v)} />
      </div>
      {inputValue.length > 0 ? (
        <TagsList inputValue={inputValue} setInputValue={(v: string) => setInputValue(v)} />
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
