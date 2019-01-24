import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import Input from "./Components/Input";
import Preview from "./Components/Preview";

class App extends Component {
  render() {
    return <div className="App">
        <Landing />
        <Preview />
        <Input />
      </div>;
  }
}

export default App;
