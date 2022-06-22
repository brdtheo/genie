export const setQueryInputValue = (value) => {
  return {
    type: "SET_QUERY_INPUT_VALUE",
    payload: value,
  };
};

export const setQueryInputError = (value) => {
  return {
    type: "SET_QUERY_INPUT_ERROR",
    payload: value,
  };
};
