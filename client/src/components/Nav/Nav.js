import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary"
  style={{ paddingLeft: 50, paddingRight:50 }}
  >
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="/">Agile Estimates</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/logout">Log Out</a>
            </li>
        </ul>
    </div>
  </nav>
);

export default Nav;
