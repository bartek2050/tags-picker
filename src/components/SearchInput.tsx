import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchInput = () => {
  return (
    <div className="flex">
      <form>
        <div className="relative">
          <input
            className="appearance-none rounded w-full py-2 pl-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Wyszukaj grupę lub tag" />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
          </div>
        </div>
      </form>
    </div>
  );
};
