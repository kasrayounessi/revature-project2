import React from "react";

const Login = (handleClose) => {
    const closeOnClick = () =>
    {
        handleClose();
    }
  return (
    <div className="login-form">
      <div className="form-box solid">
        <form>
          <h1 className="login-text">Sign In</h1>
          <label>Username</label>
          <br></br>
          <input type="text" name="username" className="login-box" />
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="password" name="password" className="login-box" />
          <br></br>
          <input type="submit" value="LOGIN" className="login-btn" onClick={closeOnClick}/>
        </form>
      </div>
    </div>
  );
};

export default Login;
