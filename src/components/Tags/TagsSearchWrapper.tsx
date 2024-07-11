import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";
import classNames from "classnames";
import { SelectedTags } from ".././Tags/SelectedTags.tsx";

export const TagsSearchWrapper = ({ showTagSearch, setShowTags }: {
  showTagSearch: boolean,
  setShowTags: (v: boolean) => void
}) => {
  return (
    <div className={classNames("shadow-md p-3 w-20 min-w-60 divide-y divide-gray-800/10 divide-solid flex flex-col", {
      block: showTagSearch,
      hidden: !showTagSearch
    })}
    >
      <div>
        <Header header="Tagi" setShowTags={setShowTags} />
        <SearchInput />
      </div>
      <SelectedTags />
    </div>
  );
};
