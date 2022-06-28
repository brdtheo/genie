import { testSongs } from "../../api/testSongs";
import { setLoading, setSearchResponse } from "./homeActions";

describe("home redux actions", () => {
  it("should return valid redux actions", () => {
    const loadingAction = setLoading(true);
    const queryResultAction = setSearchResponse(testSongs);

    expect(loadingAction).toMatchObject({
      type: "SET_LOADING",
      payload: true,
    });
    expect(queryResultAction).toMatchObject({
      type: "SET_SEARCH_RESPONSE",
      payload: [
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
        {
          highlights: [],
          index: "song",
          type: "song",
          result: expect.any(Object),
        },
      ],
    });
  });
});
