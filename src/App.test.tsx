import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("the page renders", () => {
  render(<App />);
  const titleElement = screen.getByText(/Building companies/i);
  expect(titleElement).toBeInTheDocument();
});
