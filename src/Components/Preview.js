import React, { Component } from "react";

class Preview extends Component {
  render() {
    return <div className="preview">
        <div className="preview__header border">Joseph Lander</div>
        <div className="preview__column col-1">
          <div className="info">
            <p>+1-347-517-6347</p>
            <p>josephclander@gmail.com</p>
            <p>linkedin.com/in/josephclander</p>
          </div>
          <div className="skills">
            <h3 className="preview__subheading">
                Skills
            </h3>
            <ul>
              <li>Patience</li>
              <li>Attention to detail</li>
              <li>Planning</li>
              <li>Team player</li>
              <li>Efficient</li>
            </ul>
          </div>
          <div className="education">
              <h3 className="preview__subheading">
                  Education
              </h3>
              <h5 className="education__title">
                  Mathematics with Actuarial Studies BSc
              </h5>
              <p>Southampton University</p>
              <p>1999 - 2002</p>
          </div>
        </div>
        <div className="preview__column col-2">
          <div className="profile">
            <h3 className="preview__subheading">Professional Profile</h3>
            <p>
              A previous deputy head of Mathematics and head of A-Level
              Mathematics, for one of the largest secondary schools, in the
              top 100 schools, in the UK. 13 years experience leading large
              teams of experts to educate cohorts of 300+ students. Always
              staying aware of government proposed changes to education,
              ensuring teams were trained for new content and the curriculum
              was delivered seamlessly. Innovative techniques and
              technologies were used to enpower students and teachers alike
              to make progress.
            </p>
          </div>
          <div className="work-experience">
            <div class="work-experience__position1">
              <h5 className="work-experience__title">
                Deputy Head of Mathematics
              </h5>
              <h6 className="work-experience__compDate">
                Graveney School / 2014 - 2018
              </h6>
              <p>
                My role had me assist in leading a team of 20 technical
                professionals, a third of the members of which having more
                than 20 years experience. I was respected by the head of
                department to conduct appraisals for team members and was in
                charge of new teacher training in partnership with one of
                the UK's leading training institutions, Kings College
                University London.
              </p>
              <ul>
                <li>
                  Pushed incremental, test driven development to monitor the
                  outcomes of the students, which became a model for the
                  school.
                </li>
                <li>
                  Respected by the department to train senior staff to
                  utilize technology and to support junior staff with
                  technical content, keeping all working together and
                  supporting one another.
                </li>
              </ul>
            </div>
            <div class="work-experience__position1">
              <h5 className="work-experience__title">
                Head of A-Level Mathematics & ICT Coordinator
              </h5>
              <h6 className="work-experience__compDate">
                Graveney School / 2008 - 2018
              </h6>
              <p>
                In my first few years I took the initiative to improve the
                department's provision of ICT for shared data and resources
                for teachers and created a single HTML page to keep people
                updated with new additions. This led to delivering whole
                school presentations of how to manage and share content and
                being brought into the IT department and selected to test
                the first ever CMS being rolled out to schools across the
                UK. In further years, I worked with my deputy to update our
                provision for a changing curriculum. We worked hard to
                implement changes considering; training a department, UX
                design of our setup and further improved our provision to
                students via our own automated data management system.
              </p>
              <ul>
                <li>
                  I learned of Agile philosphy and completed trials with
                  students to implement scrum techniques. Thus giving me
                  insight into the benefits and struggles of working under
                  this ethos.
                </li>
                <li>
                  To aid students to become more autonomous in their
                  learning I trialled "flipped learning" where basics are
                  learned as homework and more complex tasks attempted under
                  my supervision. Tests showed student attention spans
                  didn't stretch even up to 10 minutes when self studying
                  from videos so I created my own YouTube Channel
                  "miniMaths" with concepts explained in under 3 minutes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Preview;
