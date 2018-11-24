import React from "react";
import "./Footer.css";

export const Footer = () => (
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Agile Estimates</h5>
                  <p>Agile Estimates is being built initially as a tool to be used internally at Def Method
                      (www.defmethod.com). The tool will soon be available for commercial use. To learn 
                      more feel free to email the owner, Julia Macalaster, at julia@defmethod.com
                  </p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Sources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.estim8r.com/">Estim8r</a>
                            </li>
                            <li>
                                <a href="https://www.trilogyed.com/">Trilogy</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">About the Creater</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.linkedin.com/in/julia-macalaster/">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/jmacalaster">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.defmethod.com">Def Method</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://juliamacalaster.com"> Julia Macalaster</a>
    </div>
  </footer>
);

export default Footer;
