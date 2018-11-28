import React from "react";
import "./StoryCard.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const StoryCard = props => (
<div
  draggable
  aria-label="click item"
  className={`click-item${props.shake ? " shake" : ""}`}
  id="drag-element"
>
  <Card>
    <CardContent>
      <Typography style={{textAlign:"center", fontStretch: "expanded"}} color="textSecondary" gutterBottom>
        Min: {props.min} days - - - -  Max: {props.max} days
      </Typography>
      <Typography variant="h5" component="h2">
        {props.story}
      </Typography>
    </CardContent>
    <CardActions>
      {props.children}
    </CardActions>
  </Card>

</div>

);

export default StoryCard;
