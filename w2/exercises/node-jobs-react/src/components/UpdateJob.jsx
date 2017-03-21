import React, { Component } from 'react';
// import axios from 'axios';


class UpdateJob extends Component {

  constructor(props) {
    super(props)
    this.toggleShowUpdateJobForm = props.toggleShowUpdateJobForm
    this.job = props.job
    this.state = {
      jobInfo: ''
    }
  }

  // ajax request to get the job

  render() {
    return (
      <div>
        <p>{ this.job }</p>
        <h2>Update Job</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" name="title" defaultValue="title" ref="title" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" name="description" required defaultValue="description" ref="description"></textarea>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="company" defaultValue="company" ref="company" required/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" defaultValue="email@email.com" ref="email" required/>
          </div>
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
