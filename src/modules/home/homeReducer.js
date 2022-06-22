export const initialHomeState = {
  loading: false,
  queryResult: null,
  queryInput: {
    value: "",
    error: "",
  },
};

const homeReducer = (previousState = initialHomeState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...previousState,
        loading: action.payload,
      };
    case "SET_QUERY_RESULT":
      return {
        ...previousState,
        queryResult: action.payload,
      };
    case "SET_QUERY_INPUT_VALUE":
      return {
        ...previousState,
        queryInput: {
          value: action.payload,
          error: "",
        },
      };
    case "SET_QUERY_INPUT_ERROR":
      return {
        ...previousState,
        queryInput: {
          value: previousState.queryInput.value,
          error: action.payload,
        },
      };
    default:
      return previousState;
  }
};

export default homeReducer;
