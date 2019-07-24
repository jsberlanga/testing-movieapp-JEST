import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "../NewMovie";

afterEach(cleanup);

describe("<NewMovie />", () => {
  test("NewMovie should render", () => {
    const { debug, getByText, getByTestId, queryByTestId } = render(
      <NewMovie />
    );
    // debug();

    // console.log(queryByTestId("page-title").textContent); // "New Movie"
    expect(getByTestId("page-title").textContent).toBe("New Movie");
    expect(queryByTestId("movie-form")).toBeTruthy();
  });
  test("MovieForm snapshot", () => {
    const { container, getByTestId } = render(<NewMovie />);

    expect(getByTestId("movie-form")).toMatchSnapshot();
  });

  test("MovieForm input changes", () => {
    const wrapper = render(<NewMovie />);

    const input = wrapper.getByLabelText("text-input");
    fireEvent.change(input, { target: { value: "123qwe" } });
    // console.log(fireEvent.click(getByText("Submit")));
    expect(input.value).toBe("123qwe");
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBeFalsy();
  });
});
