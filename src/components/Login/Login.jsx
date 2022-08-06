import React from "react";
import { Typography } from "@mui/material";

export const Login = ({ children }) => {
  return (
    <div className="login-sec">
      {children && children}
      <div className="sign_in_sec current">
        <Typography variant="h3">Sign in</Typography>
        <form>
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="text" name="username" placeholder="Username" />
                <i className="la la-user"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input type="password" name="password" placeholder="Password" />
                <i className="la la-lock"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="checky-sec">
                <div className="fgt-sec">
                  <input type="checkbox" name="cc" id="c1" />
                  <label for="c1">
                    <span></span>
                  </label>
                  <small>Remember me</small>
                </div>
                <a href="#" title="">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <button type="submit" value="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div className="login-resources">
          <h4>Login Via Social Account</h4>
          <ul>
            <li>
              <a href="#" title="" className="fb">
                <i className="fa fa-facebook"></i>Login Via Facebook
              </a>
            </li>
            <li>
              <a href="#" title="" className="tw">
                <i className="fa fa-twitter"></i>Login Via Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};