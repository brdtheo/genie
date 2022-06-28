/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../utils/test-utils";
import SearchLayout from "./SearchLayout";

describe("SearchLayout component", () => {
  it("should render layout without throwing an error", () => {
    renderWithProvider(<SearchLayout />);

    expect(screen.getByTestId("search-layout")).toBeTruthy();
  });
});
