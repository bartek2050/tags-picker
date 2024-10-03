import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";

type SearchInputProps = {
  setInputValue: (v: string) => void;
  inputValue: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ inputValue, setInputValue }) => {

  return (
    <div className="flex relative justify-between items-center">
      <div className="relative">
        <div className="text-gray-400 absolute inset-y-0 left-0 top-1.5 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className="appearance-none rounded w-full py-2 pl-6 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="tags" type="text" placeholder="Wyszukaj tag" onChange={(e) => setInputValue(e.target.value)}
          value={inputValue} />
      </div>
      {inputValue.length > 0 && (
        <button onClick={() => setInputValue("")}>
          <div className="text-gray-400 inset-y-0 pointer-events-none">
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </button>
      )}
    </div>
  );
};
