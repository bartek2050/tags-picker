import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";
import classNames from "classnames";
import { SelectedTagsWrapper } from "../Tags/SelectedTagsWrapper.tsx";
import { CmsAiWrapper } from "../Tags/CmsAiWrapper.tsx";

export const TagsSearchWrapper = ({ showTagSearch, setShowTags }: {
  showTagSearch: boolean,
  setShowTags: (v: boolean) => void
}) => {
  return (
    <div className={classNames("shadow-md p-3 w-36 min-w-72 divide-y divide-gray-800/10 divide-solid flex flex-col", {
      block: showTagSearch,
      hidden: !showTagSearch
    })}
    >
      <div>
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput />
      </div>
      <SelectedTagsWrapper />
      <CmsAiWrapper />
    </div>
  );
};
