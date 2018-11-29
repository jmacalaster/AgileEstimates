import React from "react";
import "./AddBtn.css";
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const AddBtn = () => (
  <div>
  <Tooltip className="tooltip" title="Add" placement="left-end">
    <Fab color="primary" className="addButton">
      <AddIcon />
    </Fab>
  </Tooltip>
  </div>
);

export default AddBtn;
