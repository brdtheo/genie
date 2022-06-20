import React from "react";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { useSimpleForm } from "../../../hooks/useSimpleForm";
import SearchBar from "../../../ui/components/SearchBar";
import { setLoading, setQueryResult } from "../homeActions";
import { getSearchRequestURL } from "../../../api/helpers";
import { setLocation } from "../../../lib/redux-saga-router/redux/actions";
import * as L from "../../../locationTemplates";

const schema = yup.object().shape({
  query: yup.string().required("Please enter an artist/song name"),
});

const initialFormValues = {
  query: "",
};

function Homepage() {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormField, setFormData, setFormError] =
    useSimpleForm(initialFormValues);
  const loading = useSelector((state) => state.homeReducer.loading);
  const dispatch = useDispatch();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    /**
     * Handle errors (empty field, offline)
     * Create loading state
     * Retrieve data using axios
     * Once data is retrieved, redirect to search page (saga)
     */
    try {
      await schema.validate(formData.values, { abortEarly: false });
      dispatch(setLoading(true));

      const res = await axios({
        method: "get",
        url: getSearchRequestURL(formData.values.query),
      });

      dispatch(setLoading(false));
      dispatch(setQueryResult(res.data.response.hits));
      dispatch(setLocation(L.Search.search(), "PUSH"));
    } catch (err) {
      dispatch(setLoading(false));
      setFormError("query", "", err.message);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold leading-none mb-2 text-white">Genie</h1>
      <q className="leading-none text-white">Song Lyrics &amp; Knowledge</q>

      <SearchBar
        loading={loading}
        value={formData.values.query}
        onChange={(e) => setFormField("query", e.target.value)}
        handleSubmit={handleSubmitForm}
        error={formData.errors.query}
      />
    </div>
  );
}

export default Homepage;
