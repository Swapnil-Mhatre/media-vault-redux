import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function handleSubmittion(e) {
    e.preventDefault();
    dispatch(setQuery(searchText));
    setSearchText("");
  }
  return (
    <div className="bg-gray-900 text-white">
      <form onSubmit={handleSubmittion} className="flex p-5 gap-2">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          required
          value={searchText}
          className="w-full border rounded-sm py-1 px-4 outline-none"
          type="text"
          placeholder="Search here"
        />
        <button
          className="active:scale-95 border rounded-sm py-1 px-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
