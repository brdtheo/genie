import location from "./location";

describe("Not found location", () => {
  it("should return a valid location", () => {
    expect(location.notFound()).toMatchObject({
      name: expect.any(String),
      params: expect.any(Object),
      path: expect.any(String),
    });
  });
});
