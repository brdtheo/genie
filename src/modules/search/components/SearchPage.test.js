/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import SearchPage from "./SearchPage";
import { renderWithProvider } from "../../../utils/test-utils";
import { testSongs } from "../../../api/testSongs";

describe("SearchPage component", () => {
  it("should render without throwing an error", async () => {
    renderWithProvider(<SearchPage />, {
      preloadedState: {
        search: {
          input: { value: "red hot chili peppers", errors: "" },
          response: testSongs,
        },
      },
    });

    expect(screen.getAllByTestId("container")).toBeTruthy();
    expect(screen.getAllByTestId("search-card-list")).toBeTruthy();
    expect(screen.getAllByTestId("search-card")).toBeTruthy();
  });
});
