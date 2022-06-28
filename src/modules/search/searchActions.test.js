import { setQueryInputValue, setQueryInputError } from "./searchActions";

describe("search redux actions", () => {
  it("should return valid redux actions", () => {
    const inputValueAction = setQueryInputValue("red hot chili peppers");
    const inputErrorAction = setQueryInputError(
      "Please enter an artist/song name"
    );

    expect(inputValueAction).toMatchObject({
      type: "SET_SEARCH_INPUT_VALUE",
      payload: "red hot chili peppers",
    });
    expect(inputErrorAction).toMatchObject({
      type: "SET_SEARCH_INPUT_ERROR",
      payload: "Please enter an artist/song name",
    });
  });
});
