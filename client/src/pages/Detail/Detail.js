import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import JumbotronSmall from "../../components/JumbotronSmall";
import API from "../../utils/API";
import StoryCard from "../../components/StoryCard";
import StoryCardWrapper from "../../components/StoryCardWrapper";
import sampleStories from "./SampleStories.json";


class Detail extends Component {
  state = {
    project: {},
    stories: [],
    sampleStories
  };

  // When this component mounts, grab the project with the _id of this.props.match.params.id
  // e.g. localhost:3000/projects/1
  // When this component mounts, also grab the stories related to the project with the _id of 
  // this.props.match.params.id 

  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
    API.getStory(this.props.match.params.id)
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err));
  };

  deleteStory = id => {
    API.deleteStory(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div         
      style={{ paddingLeft: 50, paddingRight: 50 }}
      >
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
            <JumbotronSmall>
              <div className="card-header">
              <h3>BACKLOG</h3>
              </div>
              <div className="card-body">
                <p className="card-text">These are 'need to have' stories that should be included in the MVP.</p>
              </div>
            </JumbotronSmall>
          </Col>
          <Col size="md-6">
            <JumbotronSmall>
              <div className="card-header">
              <h3>ICEBOX</h3>
              </div>
              <div className="card-body">
                <p className="card-text">These are 'nice to have' stories that aren't required for the MVP.</p>
              </div>
            </JumbotronSmall>
          </Col>
        </Row>
        <Row>
          <StoryCardWrapper>
            <Col size="md-6">
              {this.state.stories.map(story => (
                <div className='container'>
                  <StoryCard
                    removeStory={this.deleteStory}
                    id={story.id}
                    key={story.id}
                    story={story.story}
                    perfectDays={story.perfectDays}
                    certainty={story.certainty}
                    icebox={story.icebox}
                    min={story.min}
                    max={story.max}
                  />
                </div>
              ))}
            </Col>
            <Col size="md-6">
              {this.state.stories.map(story => (
                <div className='container'>
                  <StoryCard
                    removeStory={this.deleteStory}
                    id={story.id}
                    key={story.id}
                    story={story.story}
                    perfectDays={story.perfectDays}
                    certainty={story.certainty}
                    icebox={story.icebox}
                    min={story.min}
                    max={story.max}
                  />
                </div>
              ))}
            </Col>
          </StoryCardWrapper>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/projects">← Back to Projects</Link>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Detail;
