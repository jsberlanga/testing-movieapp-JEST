import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  waitForElement
} from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MovieDetail from "../MovieDetail";

// installed package jest-fetch-mock to mock the network call to API
// https://api.themoviedb.org... so as to avoid the TypeError: Network
// request failed at XMLHttpRequest.xhr.onerror
global.fetch = require("jest-fetch-mock");

afterEach(cleanup);

const match = {
  params: {
    id: "asdfgh"
  }
};

const movie = {
  id: "123qwe",
  title: "mocked fetch response"
};

describe("<MovieDetail />", () => {
  test("movie should show details", async () => {
    await fetch.mockResponseOnce(JSON.stringify(movie));

    const { debug, container, getByTestId } = render(
      <MemoryRouter>
        <MovieDetail match={match} />
      </MemoryRouter>
    );
    await wait();
    // await waitForElement(() => getByTestId("movie-title"));

    expect(getByTestId("movie-title").textContent).toBe(movie.title);
    // debug();
  });
});
