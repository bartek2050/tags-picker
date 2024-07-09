export const SearchInput = () => {
  return (
    <div className="flex">
      <form>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Wyszukaj grupę lub tag" />
        </div>
      </form>
    </div>
  );
};
