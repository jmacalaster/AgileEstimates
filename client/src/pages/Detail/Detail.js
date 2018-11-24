import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import StoryCard from "../../components/StoryCard";
import StoryCardWrapper from "../../components/StoryCardWrapper";
import sampleStories from "./SampleStories.json";

class Detail extends Component {
  state = {
    project: {},
    sampleStories
  };


  // When this component mounts, grab the project with the _id of this.props.match.params.id
  // e.g. localhost:3000/projects/1
  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  removeStory = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const sampleStories = this.state.sampleStories.filter(story => story.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ sampleStories });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.project.title} by {this.state.project.owner}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron style="height:10px">
              <h1>Backlog</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Icebox</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <StoryCardWrapper>
            {this.state.sampleStories.map(story => (
              <StoryCard
                removeStory={this.removeStory}
                id={story.id}
                key={story.id}
                story={story.story}
                perfectDays={story.perfectDays}
                certainty={story.certainty}
                icebox={story.icebox}
              />
            ))}
            </StoryCardWrapper>
          </Col>
          <Col size="md-6">
            <StoryCardWrapper>

            </StoryCardWrapper>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.project.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/projects">← Back to Projects</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
