import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { getSearchRequestURL } from "../api/helpers";
import { navigate } from "../lib/redux-saga-router";
import { setLoading, setQueryResult } from "../modules/home/homeActions";
import { setQueryInputError } from "../modules/search/searchActions";
import * as L from "../locationTemplates";

const schema = yup.object().shape({
  value: yup.string().required("Please enter an artist/song name"),
  error: yup.string(),
});

const useSearch = () => {
  const queryInput = useSelector((state) => state.homeReducer.queryInput);
  const dispatch = useDispatch();

  const triggerSearch = async (e) => {
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

  return triggerSearch;
};

export default useSearch;
