import React, { Component } from "react";

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <header>
                    <h4>Produced by Joseph Lander</h4>
                </header>
                <h1 className="siteName">CV Creator</h1>
                <div className="blurb">
                    <h4>Professional Looking CVs</h4>
                    <p>Enter your details in the input fields below and instantly see how your next CV could look.</p>
                </div>

            </div>
        );
    }
}

export default Landing;