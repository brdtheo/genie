import location from "./location";

describe("home location", () => {
  it("should return a valid location", () => {
    expect(location.home()).toMatchObject({
      name: expect.any(String),
      params: expect.any(Object),
      path: expect.any(String),
    });
  });
});
