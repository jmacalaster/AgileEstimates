import   React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

class App extends Component {
  state = {
    isAuthed: false,
  };

updateAuth = bool => {
this.setState({
  isAuthed : bool
})    
};

render() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Signup isAuthed={this.state.isAuthed} updateAuth={this.updateAuth}/>} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)}
}

export default App;
