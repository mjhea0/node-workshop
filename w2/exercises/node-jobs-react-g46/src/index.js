import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      jobs: []
    }
    this.deleteJob = this.deleteJob.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }
  deleteJob(id) {
    // ajax request to delete job
    axios.delete(`http://localhost:8080/api/v1/jobs/${id}`)
    .then((res) => { this.getJobs() })
    .catch((err) => { console.log(err); })
  }
  getJobs() {
    axios.get(`http://localhost:8080/api/v1/jobs`)
    // .then((res) => { console.log(res); })
    .then((res) => { this.setState({ jobs: res.data.data }); })
    .catch((err) => { console.log(err); })
  }
  render() {
    return (
      <div className="container">
        <h1>Node Jobs</h1>
        <JobList
          jobs={ this.state.jobs }
          deleteJob={ this.deleteJob }
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
