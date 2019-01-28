import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="label noPrint">Example</div>
        <div className="preview__header border">{this.props.data.fullName}</div>
        <div className="info">
          <div className="info__value">
            <p className="email">{this.props.data.email}</p>
            <i className="fas fa-envelope-square" />
          </div>
          <div className="info__value">
            <p className="phone">{this.props.data.phone}</p>
            <i className="fas fa-phone-square" />
          </div>
          <div className="info__value">
            <p className="linkedin">/{this.props.data.linkedIn}</p>
            <i className="fab fa-linkedin" />
          </div>
        </div>
        <div className="skills">
          <h2 className="preview__subheading">Skills</h2>
          <ul className="skills__list">
            <li>{this.props.data.skill1}</li>
            <li>{this.props.data.skill2}</li>
            <li>{this.props.data.skill3}</li>
            <li>{this.props.data.skill4}</li>
            <li>{this.props.data.skill5}</li>
          </ul>
        </div>
        <div className="education">
          <h2 className="preview__subheading">Education</h2>
          <h5 className="education__title">{this.props.data.degreeTitle}</h5>
          <p>{this.props.data.institution}</p>
          <p>
            {this.props.data.yearFrom} - {this.props.data.yearTo}
          </p>
        </div>
        <div className="profile">
          <h2 className="preview__subheading">Professional Profile</h2>
          <p>{this.props.data.profile}</p>
        </div>
        <div className="work-experience">
          <h2 className="preview__subheading">Experience</h2>
          <div className="work-experience__position">
            <h5 className="work-experience__title">
              {this.props.data.jobTitle1}
            </h5>
            <h6 className="work-experience__compDate">
              {this.props.data.company1} / {this.props.data.yearFromPos1} -{" "}
              {this.props.data.yearToPos1}
            </h6>
            <p>
              {this.props.data.pos1info}
            </p>
            <ul>
              <li>
                {this.props.data.pos1bullet1}
              </li>
              <li>
                {this.props.data.pos1bullet2}
              </li>
            </ul>
          </div>
          <div className="work-experience__position">
            <h5 className="work-experience__title">
              {this.props.data.jobTitle2}
            </h5>
            <h6 className="work-experience__compDate">
              {this.props.data.company2} / {this.props.data.yearFromPos2} - {this.props.data.yearToPos2}
            </h6>
            <p>
              {this.props.data.pos2info}
            </p>
            <ul>
              <li>
                {this.props.data.pos2bullet1}
              </li>
              <li>
                {this.props.data.pos2bullet2}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
