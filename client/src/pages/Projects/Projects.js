import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Projects extends Component {
  state = {
    projects: [],
    title: "",
    owner: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data, title: "", owner: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.owner) {
      API.saveProject({
        title: this.state.title,
        owner: this.state.owner,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div 
      style={{ paddingLeft: 50, paddingRight: 50 }}
      >
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Your Project Title Here:</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Project Name (required)"
              />
              <Input
                value={this.state.owner}
                onChange={this.handleInputChange}
                name="owner"
                placeholder="Project Owner (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Project Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.owner && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Projects to Estimate</h1>
            </Jumbotron>
            {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project.id}>
                    <Link to={"/projects/" + project.id}>
                      <strong>
                        {project.title} managed by {project.owner}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProject(project.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Projects;
