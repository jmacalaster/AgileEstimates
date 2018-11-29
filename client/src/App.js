import   React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stories from "./pages/Stories";
import { Footer } from "./components/Footer";


class App extends Component {
  state = {
    isAuthed: false,
  };

  // Set local storage to hold the logged in boolean value 
updateAuth = bool => {
  this.setState({
    isAuthed : bool
  });
  // localStoage.setItem("isAuthed", bool);
};

render() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Signup isAuthed={this.state.isAuthed} updateAuth={this.updateAuth}/>} />
        <Route exact path="/projects" render={() => <Projects isAuthed={this.state.isAuthed} updateAuth={this.updateAuth}/>} />
        <Route exact path="/projects/:id" component={Detail} />
        <Route exact path="/login" render={() => <Login isAuthed={this.state.isAuthed} updateAuth={this.updateAuth}/>} />
        <Route exact path="/signup" render={() => <Signup isAuthed={this.state.isAuthed} updateAuth={this.updateAuth}/>} />
        <Route exact path="/projects/:id/stories" component={Stories} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
)}
}

export default App;
