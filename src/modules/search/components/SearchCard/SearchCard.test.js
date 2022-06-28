/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../../../utils/test-utils";
import SearchCard from "./SearchCard";
import { testSong } from "../../../../api/testSong";

describe("SearchCard component", () => {
  it("should render song without throwing an error", () => {
    renderWithProvider(<SearchCard type="song" item={testSong} />);

    expect(screen.getByTestId("search-card")).toBeTruthy();
  });

  it("should render artist without throwing an error", () => {
    renderWithProvider(<SearchCard type="artist" item={testSong} />);

    expect(screen.getByTestId("search-card")).toBeTruthy();
  });

  it("should render loading card without throwing an error", () => {
    renderWithProvider(<SearchCard />, {
      preloadedState: { search: { loading: true } },
    });

    expect(screen.getByTestId("search-card-loading")).toBeTruthy();
  });
});
