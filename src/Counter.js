import React, { Component, Fragment } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <Fragment>
        <button
          className="counter-button"
          style={{ background: "red" }}
          data-testid="counter-button"
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
          }
        >
          {this.state.count}
        </button>
      </Fragment>
    );
  }
}
