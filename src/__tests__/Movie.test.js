import React from "react";
import { render, cleanup } from "react-testing-library";
import Movie, { POSTER_PATH } from "../Movie";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
  // we implement this, so the second test does not fail
  console.error.mockClear();
});

console.error = jest.fn();

describe("<Movie />", () => {
  test("<Movie /> with no movie", () => {
    const { debug } = render(<Movie />);

    // We expect an error because we are not passign movie props
    //  console.error node_modules\prop-types\checkPropTypes.js:20
    //  Warning: Failed prop type: The prop `movie` is marked as required
    // in `Movie`, but its value is `undefined`.in Movie (at Movie.test.js:11)
    expect(console.error).toBeCalled();
  });

  const movie = {
    title: "qwerty",
    id: "123",
    poster_path: "123qwe.jpg"
  };

  test("<Movie /> with movie", () => {
    const { debug, getByTestId } = render(
      // Can also use MemoryRouter from 'react-router-dom library'
      <BrowserRouter>
        <Movie movie={movie} />
      </BrowserRouter>
    );
    debug();
    // by default this would show an error because we are not clearing
    // console.error = jest.fn(); to solve this problem we need to
    // include a statement in afterEach to clear the mock function console.error
    expect(console.error).not.toBeCalled();

    // our movie component is basically a link to the moviedetails component
    // so what we want to test is that the link attributes are correct
    expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
    expect(getByTestId("movie-poster").src).toBe(
      `${POSTER_PATH}${movie.poster_path}`
    );
  });
});
