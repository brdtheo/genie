/**
 * @jest-environment jsdom
 */
import * as React from "react";
import renderer from "react-test-renderer";

import Section from "./Section";

describe("Section component", () => {
  it("should render without throwing an error", () => {
    const tree = renderer.create(<Section />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render child element", () => {
    const tree = renderer
      .create(
        <Section>
          <p>test</p>
        </Section>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render when having props passed", () => {
    const tree = renderer
      .create(<Section customStyle="bg-lemon" title="Songs" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
