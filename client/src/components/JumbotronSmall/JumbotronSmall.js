import React from "react";

const JumbotronSmall = ({ children }) => (
  <div
    style={{ textAlign: "center", verticalAlign: "center" }}
    className="card text-white bg-dark mb-3"
  >
    {children}
  </div>
);

export default JumbotronSmall;

