import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectList from './ProjectList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "personal",
      description: "",
      minutes: 0,
      personal: [],
      work: [],
      valid: false
    }
  }
  updateProject(event) {
    this.setState({
      project: event.target.value
    });
  }
  updateDesc(event) {
    this.setState({
      description: event.target.value
    });
    this.valdate();
  }
  updateMin(event) {
    this.setState({
      minutes: event.target.value
    });
    this.valdate();
  }
  valdate() {
    this.setState({
      valid: this.state.description.length >= 5 && this.state.minutes > 0 && this.state.minutes <= 240
    });
  }
  addProject(event) {
    event.preventDefault();
    this.setState({
      [this.state.project]: [...this.state[this.state.project], {
        description: this.state.description,
        minutes: parseInt(this.state.minutes)
      }].sort((a, b) => b.minutes - a.minutes),
      description: "",
      minutes: 0,
      valid: false
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Work Logger</h1>
        <form onSubmit={this.addProject.bind(this)}>
          <p>Project: <select value={this.state.project} onChange={this.updateProject.bind(this)}>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select></p>
          <p>Description: <input type="text" value={this.state.description} onChange={this.updateDesc.bind(this)} /></p>
          <p>Minutes: <input type="number" min={0} max={240} value={this.state.minutes} onChange={this.updateMin.bind(this)} /></p>
          <p><button type="submit" disabled={!this.state.valid}>Add</button></p>
        </form>
        <hr />
        <ProjectList title="Personal" list={this.state.personal} />
        <ProjectList title="Work" list={this.state.work} />
      </div>
    );
  }
}

export default App;
