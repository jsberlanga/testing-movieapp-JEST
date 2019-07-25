import React from "react";
import { render, wait, waitForElement } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

global.fetch = require("jest-fetch-mock");

const movies = {
  success: null,
  results: [{ title: "some title", id: 123, poster_path: "poster.jpg" }]
};

describe("<App />", () => {
  test("should render", async () => {
    await fetch.mockResponseOnce(JSON.stringify(movies));
    const { debug, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // debug();
    expect(getByTestId("loading")).toBeTruthy();
    // await wait();
    // debug();
    // await wait();
    await waitForElement(() => getByTestId("movie-link"));
    // debug();
    expect(queryByTestId("loading")).toBeFalsy();
    expect(getByTestId("movie-link").getAttribute("href")).toBe(
      `/${movies.results[0].id}`
    );
  });

  test("should render if api fails", async () => {
    movies.success = false;
    await fetch.mockResponseOnce(JSON.stringify(movies));
    const { debug, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(getByTestId("loading")).toBeTruthy();
    await waitForElement(() => getByTestId("error"));
    expect(queryByTestId("loading")).toBeFalsy();
    expect(getByTestId("error")).toBeTruthy();
  });
});
