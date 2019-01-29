import React, { Component } from "react";
import { ReactComponent as Logo } from "../Images/logo.svg";

class Landing extends Component {
  render() {
    return (
      <div className="landing noPrint">
        <header>
          <h4>Produced by Joseph Lander</h4>
          <div className="logoContainer">
            <h5 className="logoLabel">Created with React</h5>
            <Logo className="reactLogo" />
          </div>
        </header>
        <h1 className="siteName">CV Creator</h1>
        <div className="blurb">
          <h4>Professional Looking CVs</h4>
          <p>
            Enter your details in the input fields below and instantly see how
            your next CV could look.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
