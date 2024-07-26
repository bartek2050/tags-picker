import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type SearchInputProps = {
  setFocus: (v: boolean) => void;
  setInputValue: (v: string) => void;
  inputValue: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ setFocus, inputValue, setInputValue }) => {
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <div className="flex relative">
      <div className="relative">
        <input
          className="appearance-none rounded w-full py-2 pl-6 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Wyszukaj grupę lub tag" onFocus={onFocus} onBlur={onBlur}
          onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <div className="text-gray-400 absolute inset-y-0 left-0 top-1.5 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};
