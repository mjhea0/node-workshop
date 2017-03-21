import React from 'react';

const JobList = (props) => {
  return (
    <div>
      <br/><br/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Company</th>
            <th>Email</th>
            <th>Contacted?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            props.jobs.map((job) => {
              return (
                <tr key={job.id}>
                <td>{ job.id }</td>
                <td>{ job.title }</td>
                <td>{ job.description }</td>
                <td>{ job.company }</td>
                <td>{ job.email }</td>
                <td>{ job.contacted ? 'yes' : 'no' }</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={ () => {
                      props.toggleShowUpdateJobForm();
                      props.getJob(job.id)
                    }}
                  >Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={ () => props.removeJob(job.id) }
                  >Delete</button>
                </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default JobList;
