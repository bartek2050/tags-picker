import { Header } from "../Header";
import { SearchInput } from "../SearchInput.tsx";

export const TagsSearchWrapper = () => {
  return (
    <div
      className="shadow-md p-3 w-20 min-w-60 divide-y
      divide-gray-800/10 divide-solid flex flex-col"
    >
      <div>
        <Header header="Tagi" />
        <SearchInput />
      </div>
      <div>ABC</div>
    </div>
  );
};
