import React, { useState } from "react";
import NavbarSignIn from "./NavbarSignIn";
import NavbarSignUp from "./NavbarSignUp";
import "./style.css";

const Navbar = () => {
  const [status, setStatus] = useState();

  function handleSignIn(event) {
    event.stopPropagation();
    setStatus(true);
  }

  function handleSignUp(event) {
    event.stopPropagation();
    setStatus(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand text-success" href="#">
        Coast2Coast
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link navbar-section" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle navbar-section"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action and Adventure
              </a>
              <a className="dropdown-item" href="#">
                Classics
              </a>
              <a className="dropdown-item" href="#">
                Fiction
              </a>
              <a className="dropdown-item" href="#">
                History
              </a>
              <a className="dropdown-item" href="#">
                Horror
              </a>
              <a className="dropdown-item" href="#">
                Romance
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle navbar-section"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <div
              className="dropdown-menu dropdown-menu-right account-login-container"
              aria-labelledby="navbarDropdown"
            >
              <div className="row">
                <div className="col-sm-6">
                  <button
                    className="btn btn-outline-success btn-block "
                    onClick={handleSignIn}
                  >
                    Existing
                  </button>
                </div>
                <div className="col-sm-6">
                  <button
                    className="btn btn-outline-success btn-block"
                    onClick={handleSignUp}
                  >
                    New
                  </button>
                </div>
              </div>
              {(() => {
                switch (status) {
                  case true:
                    return <NavbarSignIn />;
                  case false:
                    return <NavbarSignUp />;
                  default:
                    return null;
                }
              })()}
              <p>********************************************</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
