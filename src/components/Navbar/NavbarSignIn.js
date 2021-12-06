import React from "react";

const NavbarSignIn = () => {
  return (
    <div>
      <form className="px-4 py-3">
        <div className="form-group">
          <label for="usernameDropdown">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameDropdown"
            placeholder="booklover1"
          />
        </div>
        <div className="form-group">
          <label for="exampleDropdownFormPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck" />
          <label className="form-check-label" for="dropdownCheck">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Sign in
        </button>
      </form>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">
        Forgot password?
      </a>
    </div>
  );
};
export default NavbarSignIn;
