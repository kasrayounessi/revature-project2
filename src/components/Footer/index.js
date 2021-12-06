import React from "react";

const Footer = () => {
  return (
    <div className="jumbotron bg-dark text-light">
      <footer className="page-footer font-small green pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Creators</h5>
              <p>
                Project created by Team 12 (Coast to Coast)
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Creators' LinkedIn</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/kasra-younessi/" className="text-success" target="_blank">Kasra Younessi</a>
                </li>
                <li>
                  <a href="#!" className="text-success">Brandon Carrasco</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Creators' Portfolio</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="https://www.github.com/kasrayounessi" className="text-success" target="_blank">Kasra Younessi</a>
                </li>
                <li>
                  <a href="#!" className="text-success">Brandon Carrasco</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="#" className="text-success"> www.coasttocoast.com</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
