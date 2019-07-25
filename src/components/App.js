/* eslint react/no-did-mount-set-state: 0 */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
