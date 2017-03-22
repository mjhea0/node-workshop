import React, { Component } from 'react';
import axios from 'axios';


class UpdateJob extends Component {

  constructor(props) {
    super(props)
    this.toggleShowUpdateJobForm = props.toggleShowUpdateJobForm
    this.job = props.job
    this.state = {
      jobInfo: ''
    }
    this.getJob() // => should add to a proper lifecycle method
  }

  // ajax request to get the job
  getJob(jobID) {
    axios.get(`http://localhost:8080/api/v1/jobs/${this.job}`)
    .then((res) => {
      this.setState({ jobInfo: res.data.data })
      this.refs.title.value = this.state.jobInfo.title
      this.refs.description.value = this.state.jobInfo.title
      this.refs.company.value = this.state.jobInfo.company
      this.refs.email.value = this.state.jobInfo.email
      // if (this.state.jobInfo.contacted) {
      //   this.refs.contacted-no.value = true;
      //   this.refs.contacted-yes.value = false
      // } else {
      //   this.refs.contacted-no.value = false;
      //   this.refs.contacted-yes.value = true
      // }
    })
    .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <div>
        <h2>Update Job</h2>
        <form>
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
            <select className="contacted" id="contacted">
              <option defaultValue="0" ref="contacted-no">No</option>
              <option defaultValue="1" ref="contacted-yes">Yes</option>
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
