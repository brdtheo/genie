/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import Header from "./Header";
import { renderWithProvider } from "../../../utils/test-utils";

describe("Header component", () => {
  it("should render without throwing an error", () => {
    renderWithProvider(<Header />);

    expect(screen.getByTestId("header")).toBeTruthy();
  });
});
