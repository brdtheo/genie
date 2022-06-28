/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import HomePage from "./HomePage";
import { renderWithProvider } from "../../../utils/test-utils";

describe("HomePage component", () => {
  it("should render without throwing an error", () => {
    renderWithProvider(<HomePage />);

    expect(screen.getByTestId("home-page")).toBeTruthy();
  });
});
