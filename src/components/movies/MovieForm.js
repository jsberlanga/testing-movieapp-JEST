import React, { Component } from "react";

export default class MovieForm extends Component {
  state = {
    text: ""
  };
  render() {
    const { text } = this.state;
    const { submitForm } = this.props;
    return (
      <form data-testid="movie-form" onSubmit={() => submitForm(text)}>
        <input
          aria-label="text-input"
          type="text"
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
