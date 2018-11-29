import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/DeleteOutlined';

class Stories extends Component {
  state = {
    stories: [],
    project: {},
    story: "",
    perfectDays: "",
    noise: "",
    certainty: "",
    icebox: false,
    min: "",
    max: "",
  };

  componentDidMount() {
    this.loadStories();
    API.getProject(this.props.match.params.id)
    .then(res => this.setState({ project: res.data }))
    .catch(err => console.log(err));
  }

  loadStories = () => {
    API.getStory(this.props.match.params.id)
      .then(res => {
        this.setState({ stories: res.data, story: "", perfectDays: "", noise: "", certainty: "", icebox: "", min: "", max: "" })
      })
      .catch(err => console.log(err));
  };

  deleteStory = id => {
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
    console.log(this.state)
    let max = (((1-parseFloat(this.state.certainty))*parseFloat(this.state.perfectDays))+parseFloat(this.state.perfectDays))/.75
    console.log(max)
    if (this.state.story) {
      API.saveStory({
        project: this.props.match.params.id,
        story: this.state.story,
        perfectDays: this.state.perfectDays,
        certainty: this.state.certainty,
        icebox: false,
        noise: .25,
        min: this.state.perfectDays/.75,
        max: max,
      })
      .then(res => this.loadStories())
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
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.project.title} by {this.state.project.owner}</h1>
              <h4> Estimation of User Stories </h4>
            </Jumbotron>
            <p> On this page you will work with your developer team to estimate 
                  how long each user story will take the team to complete. Estimates 
                  should be based on "perfect developer days" (i.e. days when you
                  are most productive) with the certaintly based on how sure you are
                  in the estimate provided.
              </p>
              <br />
          </Col>
          <Col size="md-12">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Story Description</TableCell>
                  <TableCell numeric>Perfect Developer Days</TableCell>
                  <TableCell numeric>Certainty %</TableCell>
                  <TableCell numeric>Minimum Number of Days</TableCell>
                  <TableCell numeric>Maximum Number of Days</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.stories.map(story => {
                  return (
                    <TableRow key={story.id}>
                      <TableCell component="th" scope="row">
                        {story.story}
                      </TableCell>
                      <TableCell numeric>{story.perfectDays}</TableCell>
                      <TableCell numeric>{story.certainty*100} %</TableCell>
                      <TableCell numeric>{story.min}</TableCell>
                      <TableCell numeric>{story.max}</TableCell>
                      <TableCell>
                        <Delete onClick={() => this.deleteStory(story.id)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
                <br />
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
          </Col>
        </Row>
          <Link to={"/Projects/" + this.props.match.params.id}>
            <br />
            <h4> Next, organize your project into a backlog and icebox... </h4>
            <button type="button" class="btn-primary btn" href> Organize Now </button>
          </Link>
      </Container>

      </div>
    );
  }
}

export default Stories;
