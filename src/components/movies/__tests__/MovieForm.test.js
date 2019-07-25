import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "../MovieForm";

afterEach(cleanup);

// const onSubmit = () => console.log('mock function');;
const onSubmit = jest.fn();

describe("<MovieForm />", () => {
  test("input should change", () => {
    const { getByText, getByLabelText } = render(
      <MovieForm submitForm={onSubmit} />
    );
    const input = getByLabelText("text-input");

    fireEvent.change(input, { target: { value: "qwerty" } });
    expect(input.value).toBe("qwerty");

    fireEvent.click(getByText("Submit"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith("qwerty");
  });
});
