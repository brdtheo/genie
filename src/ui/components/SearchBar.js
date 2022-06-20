import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar(props) {
  const { handleSubmit, value, onChange, error, small } = props;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {small ? (
        <div className="flex h-10">
          <input
            placeholder="Search lyrics &amp; more"
            type="search"
            className="border-white px-2 focus:outline-none text-sm"
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
          />
          <button className="bg-white w-10 text-black flex justify-center items-center text-xl">
            <IoSearchSharp />
          </button>
        </div>
      ) : (
        <div className="flex h-16 mt-6">
          <input
            placeholder="Search lyrics &amp; more"
            type="search"
            className="border-white border-4 py-2 px-4 focus:outline-none"
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
          />
          <button className="bg-white w-16 text-black flex justify-center items-center text-2xl">
            <IoSearchSharp />
          </button>
        </div>
      )}
      {error && (
        <div className="bg-lemon px-4 py-1 text-sm">
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
