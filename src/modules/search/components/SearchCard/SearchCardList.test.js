/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../../../utils/test-utils";
import { testSongs } from "../../../../api/testSongs";
import SearchCardList from "./SearchCardList";

describe("SearchCardList component", () => {
  it("should render song list without throwing an error", () => {
    renderWithProvider(<SearchCardList type="song" />, {
      preloadedState: { search: { response: testSongs } },
    });

    expect(screen.getByTestId("search-card-list")).toBeTruthy();
  });

  it("should render artist list without throwing an error", () => {
    renderWithProvider(<SearchCardList type="artist" />, {
      preloadedState: { search: { response: testSongs } },
    });

    expect(screen.getByTestId("search-card-list")).toBeTruthy();
  });
});
