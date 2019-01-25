import React, { Component } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import Input from "./Components/Input";
import Preview from "./Components/Preview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Joseph Lander"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      fullName: event.target.value
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
