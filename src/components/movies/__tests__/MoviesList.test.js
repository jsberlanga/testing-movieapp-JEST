import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  waitForElement
} from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "../MoviesList";
import { POSTER_PATH } from "../Movie";

afterEach(cleanup);

global.fetch = require("jest-fetch-mock");

const movies = {
  results: [
    { title: "some title", id: 1234, poster_path: "poster.jpg" },
    { title: "sasdase2", id: 12345, poster_path: "postasdasder.jpg" }
  ]
};

const movie = movies.results[0];

describe("<MoviesList />", () => {
  test("should render", async () => {
    await fetch.mockResponseOnce(JSON.stringify(movies));
    const { debug, queryByTestId, getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <MoviesList />
      </MemoryRouter>
    );
    // debug();
    expect(getByTestId("loading")).toBeTruthy();
    // await wait();
    // debug();
    await waitForElement(() => getByTestId("movie-link"));

    // We use query when we don't know whether it should be there
    expect(queryByTestId("loading")).toBeFalsy();
    // debug();
    expect(getByTestId("movie-poster").src).toBe(
      `${POSTER_PATH}${movie.poster_path}`
    );
    expect(getAllByTestId("movie-link").length).toBe(movies.results.length);
  });
});
