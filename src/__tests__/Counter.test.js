import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "../Counter";

afterEach(cleanup);

describe("<Counter />", () => {
  test("counter should count", () => {
    // Renders component
    // const wrapper = render(<Counter />);

    // We can destructure the wrapper
    const { container, debug, getByTestId } = render(<Counter />);

    // Output dom as a string
    // wrapper.debug();
    // debug();

    const counterButton = getByTestId("counter-button");

    // Asserts text value 0 is found within a button
    // expect(wrapper.getByText("0").tagName).toBe("BUTTON");
    // expect(counterButton.tagName).toBe('BUTTON')

    // Asserts text content by data-testid attribute
    expect(counterButton.textContent).toBe("0");

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe("1");
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe("2");

    expect(counterButton.style.backgroundColor).toBe("red");
  });
});
