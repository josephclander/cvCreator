import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input noPrint">
        <div className="input__header_container">
          <h1 className="input__header">Input</h1>
          <p className="input__instructions">
            Enter your details below to update the CV with your own details.
            Scroll back up to see how it's taking shape with immediate updates.
            Once you have it how you like it, print it out or save it as a pdf.
          </p>
        </div>
        <form action="">
          <h3 className="form__subheader">Contact</h3>
          <div className="form__container">
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={this.props.data.fullName}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.props.data.email}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={this.props.data.phone}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              LinkedIn:
              <input
                type="text"
                name="linkedIn"
                value={this.props.data.linkedIn}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          <br />
          <h3 className="form__subheader">Main Skills</h3>
          <p>e.g. Forward Thinking, Team Player, Resourceful</p>
          <div className="form__container">
            <input
              type="text"
              name="skill1"
              maxLength="20"
              placeholder="1"
              value={this.props.data.skill1}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill2"
              maxLength="20"
              placeholder="2"
              value={this.props.data.skill2}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill3"
              maxLength="20"
              placeholder="3"
              value={this.props.data.skill3}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill4"
              maxLength="20"
              placeholder="4"
              value={this.props.data.skill4}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill5"
              maxLength="20"
              placeholder="5"
              value={this.props.data.skill5}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill6"
              maxLength="20"
              placeholder="6"
              value={this.props.data.skill6}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="skill7"
              maxLength="20"
              placeholder="7"
              value={this.props.data.skill7}
              onChange={this.props.handleChange}
            />
          </div>
          <br />
          <h3 className="form__subheader">Education</h3>
          <div className="form__container">
            <label>
              Degree Title:
              <input
                type="text"
                name="degreeTitle"
                value={this.props.data.degreeTitle}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Institution:
              <input
                type="text"
                name="institution"
                value={this.props.data.institution}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              <br />
              Dates:
              <br />
              Year From:{" "}
              <input
                type="number"
                name="yearFrom"
                placeholder="format - 2002"
                value={this.props.data.yearFrom}
                onChange={this.props.handleChange}
              />
              Year To:{" "}
              <input
                type="number"
                name="yearTo"
                placeholder="format - 2005"
                value={this.props.data.yearTo}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          <br />
          <h3 className="form__subheader">Profile</h3>
          <p>{this.props.data.profile.length} / 500 MAX</p>
          <textarea
            className="form__input"
            name="profile"
            id="profile"
            placeholder="Use this space to give a brief decription of what makes you a good choice for the company you are applying for."
            value={this.props.data.profile}
            onChange={this.props.handleChange}
            maxLength="500"
          />
          <br />
          <h3 className="form__subheader">Experience</h3>
          <h6>Position 1:</h6>
          <div className="form__container">
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle1"
                value={this.props.data.jobTitle1}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company1"
                value={this.props.data.company1}
                onChange={this.props.handleChange}
              />
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
                value={this.props.data.yearFromPos1}
                onChange={this.props.handleChange}
              />
              Year To:{" "}
              <input
                type="number"
                name="yearToPos1"
                placeholder="format - 2005"
                value={this.props.data.yearToPos1}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Brief Description:{" "}
              <p>{this.props.data.pos1info.length} / 500 MAX</p>
              <textarea
                className="form__input"
                name="pos1info"
                id="pos1info"
                placeholder="Breifly explain your achievements at this post. State how this experience would be an asset to the company you are applying for."
                value={this.props.data.pos1info}
                onChange={this.props.handleChange}
                maxLength="500"
              />
            </label>
            <label>
              Bullet Point 1: <p>{this.props.data.pos1bullet1.length} / 200</p>
              <textarea
                className="form__input-small"
                name="pos1bullet1"
                id="pos1info"
                value={this.props.data.pos1bullet1}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Bullet Point 2: <p>{this.props.data.pos1bullet2.length} / 200</p>
              <textarea
                className="form__input-small"
                name="pos1bullet2"
                id="pos1info"
                value={this.props.data.pos1bullet2}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
          <br />
          <h6>Position 2:</h6>
          <div className="form__container">
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle2"
                value={this.props.data.jobTitle2}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company2"
                value={this.props.data.company2}
                onChange={this.props.handleChange}
              />
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
                value={this.props.data.yearFromPos2}
                onChange={this.props.handleChange}
              />
              Year To:{" "}
              <input
                type="number"
                name="yearToPos2"
                placeholder="format - 2005"
                value={this.props.data.yearToPos2}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Brief Description{" "}
              <p>{this.props.data.pos2info.length} / 500 MAX</p>
              <textarea
                className="form__input"
                name="pos2info"
                id="pos2info"
                placeholder="Breifly explain your achievements at this post. State how this experience would be an asset to the company you are applying for."
                value={this.props.data.pos2info}
                onChange={this.props.handleChange}
                maxLength="500"
              />
            </label>
            <label>
              Bullet Point 1: <p>{this.props.data.pos2bullet1.length} / 200</p>
              <textarea
                className="form__input-small"
                name="pos2bullet1"
                id="pos2info"
                value={this.props.data.pos2bullet1}
                onChange={this.props.handleChange}
              />
            </label>
            <label>
              Bullet Point 2: <p>{this.props.data.pos2bullet2.length} / 200</p>
              <textarea
                className="form__input-small"
                name="pos2bullet2"
                id="pos2info"
                value={this.props.data.pos2bullet2}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
