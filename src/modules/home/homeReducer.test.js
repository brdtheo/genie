import homeReducer, { initialHomeState } from "./homeReducer";
import { setLoading, setSearchResponse } from "./homeActions";
import {
  setQueryInputValue,
  setQueryInputError,
} from "../search/searchActions";
import { testSongs } from "../../api/testSongs";

describe("home reducer", () => {
  it("should return initial state", () => {
    expect(homeReducer(initialHomeState, {})).toEqual(initialHomeState);
  });

  it("should handle SET_LOADING", () => {
    const newState = homeReducer(initialHomeState, setLoading(true));

    expect(newState).toEqual({
      ...initialHomeState,
      loading: true,
    });
  });

  it("should handle SET_SEARCH_RESULT", () => {
    const newState = homeReducer(initialHomeState, setSearchResponse(testSongs));

    expect(newState).toEqual({
      ...initialHomeState,
      response: testSongs,
    });
  });

  it("should handle SET_SEARCH_INPUT_VALUE", () => {
    const newState = homeReducer(
      initialHomeState,
      setQueryInputValue("red hot chili peppers")
    );

    expect(newState).toEqual({
      ...initialHomeState,
      input: {
        ...initialHomeState.input,
        value: "red hot chili peppers",
      },
    });
  });

  it("should handle SET_SEARCH_INPUT_ERROR", () => {
    const newState = homeReducer(
      initialHomeState,
      setQueryInputError("Please enter an artist/song name")
    );

    expect(newState).toEqual({
      ...initialHomeState,
      input: {
        ...initialHomeState.input,
        error: "Please enter an artist/song name",
      },
    });
  });
});
