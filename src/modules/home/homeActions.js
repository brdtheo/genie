export const setLoading = (value) => {
  return {
    type: "SET_LOADING",
    payload: value,
  };
};

export const setSearchResponse = (value) => {
  return {
    type: "SET_SEARCH_RESPONSE",
    payload: value,
  };
};
