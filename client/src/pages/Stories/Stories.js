import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Stories extends Component {
  state = {
    stories: [],
    project: {},
    story: "",
    perfectDays: "",
    noise: "",
    certainty: "",
    icebox: false,
  };

  componentDidMount() {
    this.loadStories();
    API.getProject(this.props.match.params.id)
    .then(res => this.setState({ project: res.data }))
    .catch(err => console.log(err));
  }

  loadStories = () => {
    API.getStories()
      .then(res =>
        this.setState({ stories: res.data, story: "", perfectDays: "", noise: "", certainty: "", icebox: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStories = id => {
    API.deleteStory(id)
      .then(res => this.loadStories())
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
    if (this.state.story) {
      API.saveStory({
        project: this.props.match.params.id,
        story: this.state.story,
        perfectDays: this.state.perfectDays,
        noise: this.state.noise, 
        certainty: this.state.certainty,
        icebox: this.state.icebox
      })
        .then(res => this.loadStories())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.project.title} by {this.state.project.owner}</h1>
              <h3> Estimation of User Stories </h3>
              <p> On this page you will work with your developer team to estimate 
                  how long each user story will take the team to complete. Estimates 
                  should be based on "perfect developer days" (i.e. days when you
                  are most productive) with the certaintly based on how sure you are
                  in the estimate provided.
              </p>
            </Jumbotron>
          </Col>
          <Col size="md-12">
              <List>
                <ListItem>
                <table className="table table-sm table-hover" id='totals-table'>
                  <thead>
                    <tr>
                      <th scope="col">Min Total</th>
                      <th scope="col">Max Total</th>
                    </tr>
                  </thead>
                  <tbody id='stories-table-body'>
                      <th scope="col">3</th>
                      <th scope="col">4</th>
                  </tbody>
                </table>
                </ListItem>
                <ListItem>
                <table className="table table-sm table-hover" id='story-table'>
                  <thead>
                    <tr>
                      <th scope="col">Story Description</th>
                      <th scope="col">Perfect Developer Days</th>
                      <th scope="col">Certainty %</th>
                      <th scope="col">Maximum Number of Days</th>
                      <th scope="col">Minimum Number of Days</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody id='stories-table-body'>
                      <th scope="col">As a user I would like to be able to log in</th>
                      <th scope="col">2</th>
                      <th scope="col">85%</th>
                      <th scope="col">3</th>
                      <th scope="col">4</th>
                      <th scope="col">edit</th>
                  </tbody>
                  <tbody id='stories-table-body'>
                      <th scope="col">As a user I would like to be able to log in</th>
                      <th scope="col">2</th>
                      <th scope="col">85%</th>
                      <th scope="col">3</th>
                      <th scope="col">4</th>
                      <th scope="col">edit</th>
                  </tbody>
                  {this.state.stories.length ? (
                    <tbody id='stories-table-body'>
                      {this.state.stories.map(story => (
                        <div>
                        <th scope="col" key={story.id}>
                          {story.story}
                        </th>
                        <th scope="col" key={story.id}>
                          {story.perfectDays}
                        </th>
                        <th scope="col" key={story.id}>
                          {story.certainty}
                        </th>
                        <th scope="col" key={story.id}>
                          {story.perfectDays/(1-0.25)} 
                        </th>
                        <th scope="col" key={story.id}>
                          {(((1-story.certainty)*story.perfectDays)+story.perfectDays)/(1-0.25)}
                        </th>
                        <th scope="col">edit</th>
                        </div>
                      ))}
                    </tbody>
                  ) : (
                    <h3>No results to display</h3>
                  )}
                </table>
                </ListItem>
                <ListItem>
                  <form>
                    <Input
                    value={this.state.story}
                    onChange={this.handleInputChange}
                    name="story"
                    placeholder="Describe your user story here..."
                    />
                    <Input
                    value={this.state.perfectDays}
                    onChange={this.handleInputChange}
                    name="perfectDays"
                    placeholder="Perfect Developer Days Estimate"
                    />
                    <Input
                    value={this.state.certainty}
                    onChange={this.handleInputChange}
                    name="certainty"
                    placeholder="Certainty %"
                    />
                    <FormBtn
                      disabled={!(this.state.story)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Story
                    </FormBtn>
                  </form>
                </ListItem>
              </List>
          </Col>
        </Row>
          <Link to="/Projects/1">
            <br />
            <h2> Next, organize your project into a backlog and icebox... </h2>
            <button type="button" class="btn-primary btn" href> Organize Now </button>
          </Link>
      </Container>

      </div>
    );
  }
}

export default Stories;
