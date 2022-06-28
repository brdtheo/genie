import route from "./route";

describe("Not found route", () => {
  it("should return a valid route", () => {
    expect(route).toMatchObject([
      {
        template: expect.any(Function),
        title: expect.any(String),
        requiresAuth: expect.any(Boolean),
        components: {
          layout: expect.any(Function),
          main: expect.any(Function),
        },
      },
    ]);
  });
});
