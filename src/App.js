import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Issues from "./Issues";
import Issue from "./Issue";

function App() {
  return (
    <Switch>
      <Redirect from="/" exact to="/issues" />
      <Route exact path="/issues" component={Issues} />
      <Route path="/issues/:id" component={Issue} />
    </Switch>
  );
}

export default App;
