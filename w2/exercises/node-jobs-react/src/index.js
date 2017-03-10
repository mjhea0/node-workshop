import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      jobs: []
    }
    this.getJobs()
  }

  getJobs() {
    axios.get(`http://localhost:8080/api/v1/jobs`)
    .then((res) => { this.setState({ jobs: res.data.data }); })
    .catch((err) => { console.log(err); })
  }

  render() {
    return (
      <div className="container">
        <h1>Node Jobs</h1>
        <hr/><br/>
        <JobList jobs={ this.state.jobs }/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
