import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Ads from "./components/Ads";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders without crashing", () => {
  render(<App />);
});

test("renders Ads component on the home page", () => {
  render(<App />);
  const adsElement = screen.getByText(/Classifieds/i);
  expect(adsElement).toBeInTheDocument();
});

// tests for Ads component

// jest.mock("./store/Store.js", () => ({
//   useAdsDispatch: jest.fn(),
//   useAdsState: jest.fn(() => ({ ads: [{ id: 1, title: "Ad 1" }] })),
// }));
