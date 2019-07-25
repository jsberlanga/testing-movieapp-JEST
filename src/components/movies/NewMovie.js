import React, { Component, Fragment } from "react";
import MovieForm from "./MovieForm";

export default class NewMovie extends Component {
  onSubmitForm = text => {
    console.log(text);
  };
  render() {
    return (
      <Fragment>
        <h1 data-testid="page-title">New Movie</h1>
        <MovieForm submitForm={this.onSubmitForm} />
      </Fragment>
    );
  }
}
