import axios from "axios";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { getSearchRequestURL } from "../../api/helpers";
import { navigate } from "../../lib/redux-saga-router";
import { setLoading, setQueryResult } from "../../modules/home/homeActions";
import {
  setQueryInputError,
  setQueryInputValue,
} from "../../modules/search/searchActions";
import * as L from "../../locationTemplates";

const schema = yup.object().shape({
  value: yup.string().required("Please enter an artist/song name"),
  error: yup.string(),
});

export default function SearchBar(props) {
  const { small, customStyle } = props;
  const queryInput = useSelector((state) => state.homeReducer.queryInput);
  const loading = useSelector((state) => state.homeReducer.loading);
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitForm(e);
    }
  };

  const handleOnChange = (e) => dispatch(setQueryInputValue(e.target.value));

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(setQueryInputError(""));

      await schema.validate(queryInput, {
        abortEarly: false,
      });

      dispatch(setLoading(true));

      const { data } = await axios({
        method: "get",
        url: getSearchRequestURL(queryInput.value),
      });

      dispatch(
        navigate(
          L.Search.search({
            query: encodeURIComponent(queryInput.value.trim()),
          }),
          "PUSH"
        )
      );
      dispatch(setQueryResult(data.response.hits));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setQueryInputError(err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={`relative ${customStyle ? customStyle : ""}`}
    >
      {small ? (
        <div className="flex h-7">
          <input
            disabled={loading}
            placeholder="Search lyrics &amp; more"
            type="search"
            className={`disabled:bg-black disabled:bg-opacity-10 border-white bg-lemon md:bg-white px-2 focus:outline-none text-base md:text-sm  ${
              customStyle ? customStyle : ""
            }`}
            value={queryInput.value}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
          />
          <button
            disabled={loading}
            className="disabled:bg-black disabled:bg-opacity-10 bg-lemon md:bg-white w-10 text-black flex justify-center items-center text-xl"
          >
            <IoSearchSharp />
          </button>
        </div>
      ) : (
        <div className="flex h-14 md:h-16 mt-6">
          <input
            disabled={loading}
            placeholder="Search lyrics &amp; more"
            type="search"
            className="disabled:bg-opacity-60 disabled:border-0 border-white bg-white border-4 py-2 px-4 focus:outline-none text-base w-full"
            value={queryInput.value}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
          />
          <button
            disabled={loading}
            className="disabled:bg-opacity-60 bg-white w-16 text-black flex justify-center items-center text-xl md:text-2xl"
          >
            <IoSearchSharp />
          </button>
        </div>
      )}
      {queryInput.error && (
        <div className="bg-lemon px-4 py-1 text-xs md:text-sm absolute left-0 w-full">
          <span>{queryInput.error}</span>
        </div>
      )}
    </form>
  );
}
