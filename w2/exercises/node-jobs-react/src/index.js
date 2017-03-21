import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';
import AddJob from './components/AddJob';
import UpdateJob from './components/UpdateJob';


class App extends Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      showAddJobForm: false,
      showUpdateJobForm: false,
      updateJob: ''
    }
    this.getJobs() // => should add to a proper lifecycle method
  }

  getJobs() {
    axios.get(`http://localhost:8080/api/v1/jobs`)
    .then((res) => {
      this.setState({ jobs: res.data.data })
    })
    .catch((err) => { console.log(err); })
  }

  removeJob(jobID) {
    axios.delete(`http://localhost:8080/api/v1/jobs/${jobID}`)
    .then((res) => { this.getJobs(); })
    .catch((err) => { console.log(err); });
  }

  getJob(jobID) {
    this.setState({ updateJob: jobID })
  }

  toggleShowAddJobForm() {
    let conditional = this.state.showAddJobForm
    this.setState({ showAddJobForm: !conditional })
  }

  toggleShowUpdateJobForm() {
    let conditional = this.state.showUpdateJobForm
    this.setState({ showUpdateJobForm: !conditional })
  }

  show() {
    if (this.state.showAddJobForm) {
      return (
        <AddJob
          getJobs={ this.getJobs.bind(this) }
          toggleShowAddJobForm={ this.toggleShowAddJobForm.bind(this) }
        />
      )
    }
    else if (this.state.showUpdateJobForm) {
      return (
        <UpdateJob
          job={ this.state.updateJob }
          toggleShowUpdateJobForm={ this.toggleShowUpdateJobForm.bind(this) }
        />
      )
    }
    else {
      return (
        <div>
          <button
            className="btn btn-success"
            onClick={ () => this.toggleShowAddJobForm() }
            >Add Job</button>
          <JobList
            jobs={ this.state.jobs }
            getJob={ this.getJob.bind(this) }
            removeJob={ this.removeJob.bind(this) }
            toggleShowUpdateJobForm={ this.toggleShowUpdateJobForm.bind(this) }
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Node Jobs</h1>
        <hr/><br/>
        { this.show() }
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
