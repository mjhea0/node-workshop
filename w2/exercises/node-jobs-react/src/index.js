import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import JobList from './components/JobList';
import AddJob from './components/AddJob';


class App extends Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      showForm: false
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

  toggleShowForm() {
    let conditional = this.state.showForm
    this.setState({ showForm: !conditional })
  }

  show() {
    if (this.state.showForm) {
      return (
        <AddJob
          getJobs={ this.getJobs.bind(this) }
          toggleShowForm={ this.toggleShowForm.bind(this) }
        />
      )
    }
    else {
      return (
        <div>
          <button
            className="btn btn-success"
            onClick={ () => this.toggleShowForm() }
            >Add Job</button>
          <JobList
            jobs={ this.state.jobs }
            removeJob={ this.removeJob.bind(this) }
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
