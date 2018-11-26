import React from "react";
import "./StoryCard.css";

export const StoryCard = props => (
  <div
    draggable
    aria-label="click item"
    className={`click-item${props.shake ? " shake" : ""}`}
    id="drag-element"
  >
  <div className="card border-primary mb-3">
    <div className="card-header">Perfect Days: {props.perfectDays}  -   Certainty: {props.certainty}</div>
      <div className="card-body">
        {/* <h4 className="card-title">{props.id}</h4> */}
        <p class="card-text">{props.story}}</p>
      </div>
    </div>
  </div>
);

export default StoryCard;
