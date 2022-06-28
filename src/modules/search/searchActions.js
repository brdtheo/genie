export const setQueryInputValue = (value) => {
  return {
    type: "SET_SEARCH_INPUT_VALUE",
    payload: value,
  };
};

export const setQueryInputError = (value) => {
  return {
    type: "SET_SEARCH_INPUT_ERROR",
    payload: value,
  };
};
