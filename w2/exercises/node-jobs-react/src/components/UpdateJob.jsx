import React, { Component } from 'react';
import axios from 'axios';


class UpdateJob extends Component {

  constructor(props) {
    super(props)
    this.getJobs = props.getJobs
    this.toggleShowUpdateJobForm = props.toggleShowUpdateJobForm
    this.job = props.job
    this.state = {
      jobInfo: '',
    }
    this.getJob() // => should add to a proper lifecycle method
  }

  // ajax request to get the job
  getJob() {
    axios.get(`http://localhost:8080/api/v1/jobs/${this.job}`)
    .then((res) => {
      this.setState({ jobInfo: res.data.data })
      this.refs.title.value = this.state.jobInfo.title
      this.refs.description.value = this.state.jobInfo.title
      this.refs.company.value = this.state.jobInfo.company
      this.refs.email.value = this.state.jobInfo.email
    })
    .catch((err) => { console.log(err); });
  }

  updateJob(event) {
    event.preventDefault();
    const data = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      company: this.refs.company.value,
      email: this.refs.email.value,
      contacted: this.refs.contacted.value === 'Yes' ? true : false
    }
    axios.put(`http://localhost:8080/api/v1/jobs/${this.job}`, data)
    .then((res) => {
      this.getJobs();
      this.toggleShowUpdateJobForm();
    })
    .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <div>
        <h2>Update Job</h2>
        <form onSubmit={ (event) => this.updateJob(event) }>
          <div className="form-group">
            <input type="text" className="form-control" name="title" ref="title" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" name="description" required ref="description"></textarea>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="company"  ref="company" required/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" ref="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="contacted">Contacted?</label>
            <span>&nbsp;</span>
            <select className="contacted" ref="contacted" id="contacted">
              <option
                defaultValue="0" selected={ !this.state.jobInfo.contacted }
              >No</option>
              <option
                defaultValue="1" selected={ this.state.jobInfo.contacted }
              >Yes</option>
            </select>
          </div>
          <br/>
          <div className="form-group">
            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={ () => this.toggleShowUpdateJobForm() } >Close</button>
            <span>&nbsp;</span>
            <button type="submit" className="btn btn-primary" id="update-job">Update</button>
          </div>
        </form>
      </div>
    )
  }

}

export default UpdateJob;
