import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import JumbotronSmall from "../../components/JumbotronSmall";
import API from "../../utils/API";
import StoryCard from "../../components/StoryCard";
import StoryCardWrapper from "../../components/StoryCardWrapper";
import sampleStories from "./SampleStories.json";
import Button from '@material-ui/core/Button';


class Detail extends Component {
  state = {
    project: {},
    stories: [],
    storiesBacklog: [],
    storiesIcebox: [],
    backlogMin: "",
    backlogMax: "",
    iceboxMin: "",
    icebboxMax: "",
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
      this.loadStories();
      //Set variables for Backlog and Icebox Max and Min so that we can display them on the page 
  };

  loadStories() {
    API.getStory(this.props.match.params.id)
      .then(res => {
        this.setState({ stories: res.data })
  //These functions allow us to store the stories in two arrays: Backlog and Icebox, depending on the 
  //boonean value for icebox - false = put it in the backlog array, true = put it in the icebox array
        let storiesBacklog = res.data.filter(story => story.icebox == false);
        this.setState({ storiesBacklog: storiesBacklog })
        let storiesIcebox = res.data.filter(story => story.icebox == true);
        this.setState({ storiesIcebox: storiesIcebox })
  //These functions allow us to set a state of the totaled Min and Max for both the backlog and icebox 
        let iceboxMin = storiesIcebox.reduce( function(cnt,o){ return cnt + parseFloat(o.min); }, 0);
        this.setState({ iceboxMin: (iceboxMin).toFixed() });
        let iceboxMax = storiesIcebox.reduce( function(cnt,o){ return cnt + parseFloat(o.max); }, 0);
        this.setState({ iceboxMax: (iceboxMax).toFixed() });
        let backlogMin = storiesBacklog.reduce( function(cnt,o){ return cnt + parseFloat(o.min); }, 0);
        this.setState({ backlogMin: (backlogMin).toFixed() });
        let backlogMax = storiesBacklog.reduce( function(cnt,o){ return cnt + parseFloat(o.max); }, 0);
        this.setState({ backlogMax: (backlogMax).toFixed() });
      }
    )
    .catch(err => console.log(err));

  };

  deleteStory = id => {
    API.deleteStory(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  };

  setBacklog = id => {
    API.backlogStory(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  };

  setIcebox = id => {
    API.iceboxStory(id)
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
                <h4>{this.state.backlogMin} - {this.state.backlogMax} Developer Days</h4>
                <h4>{(this.state.backlogMin)/5} - {(this.state.backlogMax)/5} Developer Weeks</h4>
                <br />
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
              <h4>{this.state.iceboxMin} - {this.state.iceboxMax} Developer Days</h4>
                <h4>{(this.state.iceboxMin)/5} - {(this.state.iceboxMax)/5} Developer Weeks</h4>
                <br />
                <p className="card-text">These are 'nice to have' stories that aren't required for the MVP.</p>
              </div>
            </JumbotronSmall>
          </Col>
        </Row>
        <Row>
          {/* <StoryCardWrapper> */}
              <Col size="md-6">
              {this.state.storiesBacklog.map(story => (
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
                  >
                    <Button onClick={() => this.deleteStory(story.id)} size="small">Delete</Button>
                    <Button onClick={() => this.setIcebox(story.id)} size="small" color="primary">Move to Icebox →</Button>
                  </StoryCard>
              ))}
              </Col>
              <Col size="md-6">
              {this.state.storiesIcebox.map(story => (
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
                  >
                    <Button onClick={() => this.setBacklog(story.id)} size="small" color="primary">← Move to Backlog</Button>
                    <Button onClick={() => this.deleteStory(story.id)} size="small">Delete</Button>
                  </StoryCard>
              ))}
              </Col>
          {/* </StoryCardWrapper> */}
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
