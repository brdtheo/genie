/**
 * @jest-environment jsdom
 */
import * as React from "react";
import renderer from "react-test-renderer";

import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage component", () => {
  it("should render without throwing an error", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
