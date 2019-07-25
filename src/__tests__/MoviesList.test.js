import React from "react";
import { render, fireEvent, cleanup, wait } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "../MoviesList";
import { POSTER_PATH } from "../Movie";

afterEach(cleanup);

global.fetch = require("jest-fetch-mock");

const movie = {
  results: [{ title: "some title", id: "stringid", poster_path: "poster.jpg" }]
};

describe("<MoviesList />", () => {
  test("should render", async () => {
    await fetch.mockResponseOnce(JSON.stringify(movie));
    const { debug, getByTestId } = render(
      <MemoryRouter>
        <MoviesList />
      </MemoryRouter>
    );
    // debug();
    expect(getByTestId("loading")).toBeTruthy();
    await wait();
    // debug();
    expect(getByTestId("movie-poster").src).toBe(
      `${POSTER_PATH}${movie.results[0].poster_path}`
    );
  });
});
