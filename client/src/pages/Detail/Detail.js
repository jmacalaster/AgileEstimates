import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import JumbotronSmall from "../../components/JumbotronSmall";
import API from "../../utils/API";
import StoryCard from "../../components/StoryCard";
import StoryCardWrapper from "../../components/StoryCardWrapper";
import sampleStories from "./SampleStories.json";
import Dragula from 'react-dragula';

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
  };

  removeStory = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const sampleStories = this.state.sampleStories.filter(story => story.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ sampleStories });
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
              <h1>Backlog</h1>
              </div>
              <div className="card-body">
                <p className="card-text">These are 'need to have' stories that should be included in the MVP.</p>
              </div>
            </JumbotronSmall>
          </Col>
          <Col size="md-6">
            <JumbotronSmall>
              <div className="card-header">
              <h1>Icebox</h1>
              </div>
              <div className="card-body">
                <p className="card-text">These are 'nice to have' stories that aren't required for the MVP.</p>
              </div>
            </JumbotronSmall>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <div className='containerLeft' ref={this.dragulaDecorator}>
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
          </div>
          </Col>
          <Col size="md-6">
          <div className='containerRight' ref={this.dragulaDecorator}>
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
          </div>
          </Col>
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
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}

export default Detail;
