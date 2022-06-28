/**
 * @jest-environment jsdom
 */
import * as React from "react";
import renderer from "react-test-renderer";

import Footer from "./Footer";

describe("Footer component", () => {
  it("should render without throwing an error", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
