export const setLoading = (value) => {
  return {
    type: "SET_LOADING",
    payload: value,
  };
};

export const setQueryResult = (value) => {
  return {
    type: "SET_QUERY_RESULT",
    payload: value,
  };
};
