import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    );
  }
}

export default App;
