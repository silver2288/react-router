import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import About from "./About";
const Main = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
    </Switch>
  </Main>
);
export default Main;
