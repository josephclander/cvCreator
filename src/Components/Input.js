import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input noPrint">
        <h1 className="input__header">Input</h1>
        <p className="input__instructions">
          Enter your details below and then scroll on to see how your CV is
          taking shape. Feel free to go back and edit your info and see
          immediate updates.
        </p>
        <form action="">
          <h3 className="form__subheader">Contact</h3>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" />
          </label>
          <label>
            LinkedIn:
            <input type="text" name="linkedIn" />
          </label>
          <br />
          <h3 className="form__subheader">Main Skills</h3>
          <p>e.g. Forward Thinking, Team Player, Resourceful</p>
          <input type="text" name="skill-1" />
          <input type="text" name="skill-2" />
          <input type="text" name="skill-3" />
          <input type="text" name="skill-4" />
          <input type="text" name="skill-5" />
          <br />
          <h3 className="form__subheader">Education</h3>
          <label>
            Degree Title:
            <input type="text" name="degreeTitle" />
          </label>
          <label>
            Institution:
            <input type="text" name="institution" />
          </label>
          <label>
            <br />
            Dates:
            <br />
            Year From:{" "}
            <input type="number" name="yearFrom" placeholder="format - 2002" />
            Year To:{" "}
            <input type="number" name="yearTo" placeholder="format - 2005" />
          </label>
          <br />
          <h3 className="form__subheader">Profile</h3>
          <textarea
            className="form__input"
            name="profile"
            id="profile"
            placeholder="Use this space to give a brief decription of what makes you a good choice for the company you are applying for."
          />
          <h3 className="form__subheader">Experience</h3>
          Position 1:
          <label>
            Job Title:
            <input type="text" name="jobTitle1" />
          </label>
          <label>
            Company:
            <input type="text" name="company1" />
          </label>
          <label>
            <br />
            Dates:
            <br />
            Year From:{" "}
            <input
              type="number"
              name="yearFromPos1"
              placeholder="format - 2002"
            />
            Year To:{" "}
            <input
              type="number"
              name="yearToPos1"
              placeholder="format - 2005"
            />
          </label>
          <textarea
            className="form__input"
            name="pos1info"
            id="pos1info"
            placeholder="Breifly explain your achievements at this post. State how this experience would be an asset to the company you are applying for."
          />
          <br/>
          Position 2:
          <label>
            Job Title:
            <input type="text" name="jobTitle2" />
          </label>
          <label>
            Company:
            <input type="text" name="company2" />
          </label>
          <label>
            <br />
            Dates:
            <br />
            Year From:{" "}
            <input
              type="number"
              name="yearFromPos2"
              placeholder="format - 2002"
            />
            Year To:{" "}
            <input
              type="number"
              name="yearToPos2"
              placeholder="format - 2005"
            />
          </label>
          <textarea
            className="form__input"
            name="pos2info"
            id="pos1info"
            placeholder="Breifly explain your achievements at this post. State how this experience would be an asset to the company you are applying for."
          />
        </form>
      </div>
    );
  }
}

export default Input;
