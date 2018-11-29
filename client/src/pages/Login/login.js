import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import  { Link, Redirect }  from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Projects from "../Projects";

class Login extends Component {
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
      return;
    }
    
    else {
      API.findLogin({
        email: this.state.email,
        password: this.state.password,
      })
        .then(data => this.props.updateAuth(true))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div
      style={{ paddingLeft: 50, paddingRight: 50 }}
      >
      { !this.props.isAuthed ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Login to your account</h1>
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
                Login
              </FormBtn>
            </form>
            <br />
            <p>Or sign up <Link to="/signup">here</Link></p>
          </Col>
        </Row>
      </Container>
      ) : (
        <Redirect to="/projects" component={Projects} /> 
          )}
      </div> )
  }
}

export default Login;