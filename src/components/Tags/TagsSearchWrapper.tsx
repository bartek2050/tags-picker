import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";
import classNames from "classnames";
import { SelectedTagsWrapper } from "../Tags/SelectedTagsWrapper.tsx";
import { CmsAiWrapper } from "../Tags/CmsAiWrapper.tsx";
import { SelectionMeterWrapper } from "../Tags/SelectionMeterWrapper.tsx";
import React from "react";

type TagsSearchWrapperProps = {
  showTagSearch: boolean | undefined,
  setShowTags: (v: boolean) => void
}

export const TagsSearchWrapper: React.FC<TagsSearchWrapperProps> = ({ showTagSearch, setShowTags }) => {
  return (
    <div
      className={classNames("shadow-md p-3 w-36 rounded min-w-72 divide-y divide-gray-800/10 divide-solid flex flex-col", {
        block: showTagSearch,
        hidden: !showTagSearch
      })}
    >
      <div className="mt-2">
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput />
      </div>
      <SelectedTagsWrapper />
      <CmsAiWrapper />
      <SelectionMeterWrapper />
    </div>
  );
};
