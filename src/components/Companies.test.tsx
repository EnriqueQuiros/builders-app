import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test("the page try to load data", async () => {
  render(<App />);

  const text = await screen.findByText("Loading data...");
  expect(text).toHaveTextContent("Loading data...");
});

test("the page shows a list of companies", async () => {
  render(<App />);

  const text = await screen.findByText("Berlin");
  expect(text).toHaveTextContent("Berlin");

  const img = await screen.findAllByRole("img");
  expect(img).toHaveLength(8);
});

test("filtering by text reduces the list of companies", async () => {
  render(<App />);

  const input = screen.getByTestId("searchbox");

  fireEvent.change(input, { target: { value: "k" } });
  expect(input).toHaveValue("k");

  const img = await screen.findAllByRole("img");
  expect(img).toHaveLength(2);

  fireEvent.change(input, { target: { value: "--not present text--" } });
  expect(input).toHaveValue("--not present text--");

  const text = await screen.findByText(
    "No companies fit with the filter criteria"
  );
  expect(text).toHaveTextContent("No companies fit with the filter criteria");
});

test("filtering by specialty reduces the list of companies", async () => {
  render(<App />);

  const togglePlumbing = screen.getByTestId("toggle-plumbing");
  fireEvent.click(togglePlumbing);

  const img = await screen.findAllByRole("img");
  expect(img).toHaveLength(7);

  const toggleElectrical = screen.getByTestId("toggle-electrical");
  fireEvent.click(toggleElectrical);

  const img2 = await screen.findAllByRole("img");
  expect(img2).toHaveLength(4);
});
