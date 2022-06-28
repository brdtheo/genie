/**
 * @jest-environment jsdom
 */
import * as React from "react";

import LoadingBar from "./LoadingBar";
import { renderWithProvider } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";

describe("LoadingBar component", () => {
  it("should render without throwing an error", () => {
    renderWithProvider(<LoadingBar />);

    expect(screen.getByTestId("loading-bar")).toBeTruthy();
  });
});
