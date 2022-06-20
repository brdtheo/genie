export const initialHomeState = {
  loading: false,
  queryResult: null,
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
    default:
      return previousState;
  }
};

export default homeReducer;
