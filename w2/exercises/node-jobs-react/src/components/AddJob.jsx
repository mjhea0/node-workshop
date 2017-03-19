import React, { Component } from 'react';
import axios from 'axios';


class AddJob extends Component {

  constructor(props) {
    super(props)
    this.getJobs = props.getJobs
    this.toggleShowForm = props.toggleShowForm
  }

  addJob(event) {
    event.preventDefault();
    const data = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      company: this.refs.company.value,
      email: this.refs.email.value
    }
    axios.post(`http://localhost:8080/api/v1/jobs`, data)
    .then((res) => {
      this.getJobs();
      this.toggleShowForm();
    })
    .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.addJob(event) }>
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
            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={ () => this.toggleShowForm() } >Close</button>
            <button type="submit" className="btn btn-primary" id="add-job">Add</button>
          </div>
        </form>
      </div>
    )
  }

}

export default AddJob;
