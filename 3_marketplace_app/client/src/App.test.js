import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import { render, screen, fireEvent } from "@testing-library/react";
// import { render, screen } from "@testing-library/react";

import { act } from "react-dom/test-utils";
import { AdsProvider } from "./store/Store";
import App from "./App";
import Ads from "./components/Ads";

it("renders without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
  });
});

test("renders without crashing", () => {
  render(<App />);
});

test("renders Ads component on the home page", () => {
  render(<App />);
  const adsElement = screen.getByText(/Classifieds/i);
  expect(adsElement).toBeInTheDocument();
});

// Ads.test

describe("Ads Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("fetches ads and displays them", async () => {
    render(
      <AdsProvider>
        <Router>
          <Ads />
        </Router>
      </AdsProvider>
    );

    // Verify the fetch was called
    expect(fetch).toHaveBeenCalledTimes(1);

    // Check if "Classifieds" heading is present
    expect(screen.getByText(/Classifieds/i)).toBeInTheDocument();

    // Wait for the ad to be displayed
    const adTitle = await screen.findByText("Ad 1");
    expect(adTitle).toBeInTheDocument();
  });

  it("navigates to details page on ad click", async () => {
    render(
      <AdsProvider>
        <Router>
          <Ads />
        </Router>
      </AdsProvider>
    );

    // Wait for the ad to be displayed and click it
    const adTitle = await screen.findByText("Ad 1");
    fireEvent.click(adTitle);

    // Assuming the Details page changes the URL, we check for the URL change
    expect(window.location.pathname).toBe("/details");
  });
});
