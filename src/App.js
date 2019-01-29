import React, { Component } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import Input from "./Components/Input";
import Preview from "./Components/Preview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      border: "#d2d2d2",
      title: "#000000",
      fullName: "Joseph Lander",
      email: "josephclander@gmail.com",
      phone: "+1-347-517-6347",
      linkedIn: "josephclander",
      skill1: "Patience",
      skill2: "Attention to detail",
      skill3: "Planning",
      skill4: "Team player",
      skill5: "Efficient",
      skill6: "",
      skill7: "",
      degreeTitle: "Mathematics with Actuarial Studies BSc",
      institution: "Southampton University",
      yearFrom: "1999",
      yearTo: "2002",
      profile:
        "A previous deputy head of Mathematics and head of A-Level Mathematics, for one of the largest secondary schools, in the top 100 schools, in the UK. 13 years experience leading large teams of experts to educate cohorts of 300+ students. Always being aware of government proposed changes to education, ensuring teams were trained for new content and the curriculum was delivered seamlessly. Innovative techniques and technologies were used to empower students and teachers alike to make progress.",
      jobTitle1: "Deputy Head of Mathematics",
      company1: "Graveney School",
      yearFromPos1: "2014",
      yearToPos1: "2018",
      pos1info:
        "My role had me assist in leading a team of 20 technical professionals, a third of the members of which had more than 20 years experience. I was respected by the head of department to conduct appraisals for team members and was in charge of new teacher training in partnership with one of the UK's leading training institutions, Kings College University London.",
      pos1bullet1:
        "Pushed incremental, test driven development to monitor the outcomes of the students, which became a model for the school.",
      pos1bullet2:
        "Respected by the department to train senior staff to utilize technology and to support junior staff with technical content, keeping all working together and supporting one another.",
      jobTitle2: "Head of A-Level Mathematics & ICT Coordinator",
      company2: "Graveney School",
      yearFromPos2: "2008",
      yearToPos2: "2018",
      pos2info:
        "In my first few years, I took the initiative to improve the department's provision of ICT for shared data and resources for teachers and created a web-page to keep people updated with new additions. This led to delivering whole school presentations on how to manage and share content and being brought into the IT department and selected to test the first-ever CMS being rolled out to schools across the UK.",
      pos2bullet1:
        "I learned of Agile philosophy and completed trials with students to implement scrum techniques. Thus giving me insight into the benefits and struggles of working under this ethos.",
      pos2bullet2:
        'Tests showed student attention spans didn\'t stretch even up to 10 minutes when self-studying from videos so I created my own YouTube Channel "miniMaths" with concepts explained in under 3 minutes.'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="App">
        <Landing />
        <Preview data={this.state} />
        <Input data={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
