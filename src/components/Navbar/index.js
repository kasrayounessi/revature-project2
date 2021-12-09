import React, { useState } from "react";
import NavbarSignIn from "./NavbarSignIn";
import NavbarSignUp from "./NavbarSignUp";
import shoppingCartImg from "./shopping-cart.svg";
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
          <li className="nav-item nav-item-custom">
            <a className="nav-link navbar-section" href="/">
              Home 
            </a>
          </li>
          <li className="nav-item nav-item-custom">
            <a className="nav-link navbar-section" href="/audiobooks">
              Audiobooks
            </a>
          </li>

          <li className="nav-item nav-item-custom dropdown">
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
          <li className="nav-item nav-item-custom">
            <a className="nav-link navbar-section" href="/shoppingcart">
              <img src={shoppingCartImg} width="30" height="30" />
            </a>
          </li>
          
        </ul>
      </div>

      
    </nav>
  );
};
export default Navbar;
