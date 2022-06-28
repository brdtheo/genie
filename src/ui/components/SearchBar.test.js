/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../utils/test-utils";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("should render without throwing an error", () => {
    renderWithProvider(<SearchBar />, {
      preloadedState: {
        search: { input: { value: "red hot chili peppers" } },
      },
    });

    expect(screen.getByTestId("search-bar-form")).toBeTruthy();
    expect(screen.getByTestId("search-bar-input")).toBeTruthy();
    expect(screen.getByDisplayValue(/red hot chili peppers/)).toBeTruthy();
  });

  it("should render form error", () => {
    renderWithProvider(<SearchBar />, {
      preloadedState: {
        search: {
          input: { error: "Please enter an artist/song name" },
        },
      },
    });

    expect(screen.getByTestId("search-bar-form")).toBeTruthy();
    expect(screen.getByTestId("search-bar-input")).toBeTruthy();
    expect(screen.getByTestId("search-bar-error")).toBeTruthy();
  });

  it("should render with style props", () => {
    renderWithProvider(
      <SearchBar
        customFormStyle="w-full"
        customContainerStyle="w-full h-7 md:border md:border-black md:border-opacity-5"
        customInputStyle="w-full disabled:bg-black disabled:bg-opacity-10 md:bg-white px-2 md:text-sm bg-lemon"
        customButtonStyle="disabled:bg-black disabled:bg-opacity-10 bg-lemon md:bg-white w-10 text-xl"
      />
    );

    expect(screen.getByTestId("search-bar-form")).toBeTruthy();
    expect(screen.getByTestId("search-bar-input-container")).toBeTruthy();
    expect(screen.getByTestId("search-bar-input")).toBeTruthy();
    expect(screen.getByTestId("search-bar-button")).toBeTruthy();
    expect(
      screen.getByTestId("search-bar-input-container").classList.contains("h-7")
    ).toBe(true);
    expect(
      screen
        .getByTestId("search-bar-input")
        .classList.contains("disabled:bg-black")
    ).toBe(true);
    expect(
      screen.getByTestId("search-bar-button").classList.contains("bg-lemon")
    ).toBe(true);
  });
});
