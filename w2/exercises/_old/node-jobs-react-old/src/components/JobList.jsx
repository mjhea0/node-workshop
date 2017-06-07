import React from 'react';

const JobList = (props) => {
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Company</th>
        <th>Email</th>
        <th>Contacted?</th>
      </tr>
    </thead>
    <tbody>
      {
        props.jobs.map((job) => {
          return <tr key={job.id}>
          <td>{ job.id }</td>
          <td>{ job.title }</td>
          <td>{ job.description }</td>
          <td>{ job.company }</td>
          <td>{ job.email }</td>
          <td>{ job.contacted ? 'yes' : 'no' }</td>
          </tr>
        })
      }
    </tbody>
  </table>
  )
}

export default JobList;
