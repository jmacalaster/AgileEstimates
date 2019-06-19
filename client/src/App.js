import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stories from "./pages/Stories";
import { Footer } from "./components/Footer";

import ProtectedRoute from "./helpers/ProtectedRoute";
import Logout from "./helpers/Logout";


class App extends Component {
  state = {
    isAuthed: false,
  };
  componentDidMount() {
    if (localStorage.getItem("isAuthed") !== undefined && localStorage.getItem("isAuthed") !== null ) {
      this.setState({ isAuthed: true });
    };
  }
  // Set local storage to hold the logged in boolean value 
  updateAuth = (bool, userId) => {
    this.setState({
      isAuthed: bool
    });
    localStorage.setItem("isAuthed", userId);
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Signup isAuthed={this.state.isAuthed} updateAuth={this.updateAuth} />} />
            <Route exact path="/login" render={() => <Login isAuthed={this.state.isAuthed} updateAuth={this.updateAuth} />} />
            <Route exact path="/signup" render={() => <Signup isAuthed={this.state.isAuthed} updateAuth={this.updateAuth} />} />
            <Route exact path="/logout" render={() => <Logout updateAuth={this.updateAuth} />} />
            <ProtectedRoute isAuthed={this.state.isAuthed} exact path="/projects" component={() => <Projects isAuthed={this.state.isAuthed} updateAuth={this.updateAuth} />} />
            <ProtectedRoute isAuthed={this.state.isAuthed} exact path="/projects/:id" component={Detail} />
            <ProtectedRoute isAuthed={this.state.isAuthed} exact path="/projects/:id/stories" component={Stories} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
