import React, { Component } from "react";
import "./StoryCardWrapper.css";
import dragula from 'react-dragula';
import ReactDOM from 'react-dom';

class StoryCardWrapper extends Component {

componentDidMount() {
    var container = ReactDOM.findDOMNode(this);
      dragula([container]);
  };

    render() {
        return (
            <div className="wrapper">{this.props.children}</div>
        );
    }
}

export default StoryCardWrapper;

// export const StoryCardWrapper = props => (

// <div className="wrapper">{props.children}</div>

// );

// export default StoryCardWrapper;
