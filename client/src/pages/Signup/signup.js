import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Login from "../Login";
import Projects from "../Projects";

class Signup extends Component {
  state = {
    login: [],
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
        console.log("Could not save user")
        return;
    }
    
    else {
      API.saveNewUser({
        email: this.state.email,
        password: this.state.password,
      })
        .then(data => this.props.updateAuth(true))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      { !this.props.isAuthed ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create a New Agile Estimates Account</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
            <br />
            <p>Or log in <Link to={Login}>here</Link></p>
          </Col>
        </Row>
      </Container>
      ) : (
    <Redirect to="/projects" component={Projects} /> 
      )}
    </div> )
}
}

export default Signup;