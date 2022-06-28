export const initialHomeState = {
  loading: false,
  response: null,
  input: {
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
    case "SET_SEARCH_RESPONSE":
      return {
        ...previousState,
        response: action.payload,
      };
    case "SET_SEARCH_INPUT_VALUE":
      return {
        ...previousState,
        input: {
          value: action.payload,
          error: "",
        },
      };
    case "SET_SEARCH_INPUT_ERROR":
      return {
        ...previousState,
        input: {
          value: previousState.input.value,
          error: action.payload,
        },
      };
    default:
      return previousState;
  }
};

export default homeReducer;
