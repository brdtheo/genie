import { getSearchRequestURL, parseArtists, parseViews } from "./helpers";
import { testSongs } from "./testSongs";

describe("helpers", () => {
  it("should return a valid search URL", () => {
    const searchInput = "red hot chili peppers";
    const URL = getSearchRequestURL(searchInput);

    expect(URL).toBe(
      `https://api.genius.com/search?q=red%20hot%20chili%20peppers&access_token=${process.env.REACT_APP_GENIUS_API_KEY}`
    );
  });

  it("should return a list of artists", async () => {
    const parsedArtists = parseArtists(testSongs);

    expect(parsedArtists).toBeDefined();
    expect(parsedArtists).toHaveLength(1);
    expect(parsedArtists).toMatchObject([
      {
        id: expect.any(Number),
        name: expect.any(String),
        image_url: expect.any(String),
      },
    ]);
  });

  it("should return parsed page views count", async () => {
    const case1 = parseViews(undefined);
    const case2 = parseViews(777);
    const case3 = parseViews(45768573);

    expect(case1).toBe(0);
    expect(case2).toBe(777);
    expect(case3).toBe("45.8M");
  });
});
