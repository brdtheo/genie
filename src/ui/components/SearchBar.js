import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";

import { setQueryInputValue } from "../../modules/search/searchActions";
import useSearch from "../../hooks/useSearch";

export default function SearchBar(props) {
  const {
    customFormStyle,
    customContainerStyle,
    customInputStyle,
    customButtonStyle,
  } = props;
  const queryInput = useSelector((state) => state.homeReducer.queryInput);
  const loading = useSelector((state) => state.homeReducer.loading);
  const dispatch = useDispatch();
  const triggerSearch = useSearch();

  const handleOnChange = (e) => dispatch(setQueryInputValue(e.target.value));
  const handleSubmitForm = (e) => triggerSearch(e);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitForm(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={`relative ${customFormStyle ? customFormStyle : ""}`}
    >
      <div
        className={`flex ${customContainerStyle ? customContainerStyle : ""}`}
      >
        <input
          disabled={loading}
          placeholder="Search lyrics &amp; more"
          type="search"
          className={`border-white focus:outline-none text-base ${
            customInputStyle ? customInputStyle : ""
          }`}
          value={queryInput.value}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        <button
          disabled={loading}
          className={`text-black flex justify-center items-center ${
            customButtonStyle ? customButtonStyle : ""
          }`}
        >
          <IoSearchSharp />
        </button>
      </div>
      {queryInput.error && (
        <div className="bg-lemon px-4 py-1 text-xs md:text-sm absolute left-0 w-full">
          <span>{queryInput.error}</span>
        </div>
      )}
    </form>
  );
}
