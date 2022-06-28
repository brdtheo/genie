/**
 * @jest-environment jsdom
 */
import * as React from "react";
import renderer from "react-test-renderer";

import Container from "./Container";

describe("Container component", () => {
  it("should render without throwing an error", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render child element", () => {
    const tree = renderer
      .create(
        <Container>
          <p>test</p>
        </Container>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render when having props passed", () => {
    const tree = renderer.create(<Container customStyle="bg-lemon" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
