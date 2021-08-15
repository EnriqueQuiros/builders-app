export interface Props {
  onSearch(searchText: string): void;
}

const SearchBar = (props: Props) => {
  return (
    <>
      <div className="flex max-w-md mx-auto  bg-white rounded-lg shadow-lg mt-10">
        <span className="  px-2 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-2 px-8   bg-white rounded-md focus:outline-none focus:ring ring-gray-300 "
          placeholder="Search"
          onChange={(e) => props.onSearch(e.target.value.toLocaleLowerCase())}
        />
      </div>
    </>
  );
};

export default SearchBar;
