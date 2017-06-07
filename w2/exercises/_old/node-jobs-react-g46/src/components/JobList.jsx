import React from 'react';

const JobList = (props) => {
  return (
    <ul>
      {
        props.jobs.map((job) => {
          return <li key={ job.id }>
            { job.title }
            &nbsp;
            <button
              onClick={ props.deleteJob(job.id) }
              className="btn btn-xs btn-danger"
            >Delete</button>
          </li>
        })
      }
    </ul>
  )
}

export default JobList;
