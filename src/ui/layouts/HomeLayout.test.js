/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../utils/test-utils";
import HomeLayout from "./HomeLayout";

describe("HomeLayout component", () => {
  it("should render layout without throwing an error", () => {
    renderWithProvider(<HomeLayout />);

    expect(screen.getByTestId("home-layout")).toBeTruthy();
    expect(screen.getByTestId("footer")).toBeTruthy();
  });

  it("should render layout with loading bar", () => {
    renderWithProvider(<HomeLayout />, {
      preloadedState: {
        search: {
          loading: true,
        },
      },
    });

    expect(screen.getByTestId("home-layout")).toBeTruthy();
    expect(screen.getByTestId("loading-bar")).toBeTruthy();
  });
});
