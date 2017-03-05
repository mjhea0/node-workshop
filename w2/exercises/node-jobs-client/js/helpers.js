function getAllJobs() {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/jobs',
  });
}

// add job
function addJob(data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: `http://localhost:3000/api/v1/jobs`,
  });
}

// update job
function updateJob() {
  // pass
}

// delete job
function deleteJob(id) {
  return $.ajax({
    method: 'DELETE',
    url: `http://localhost:3000/api/v1/jobs/${ id }`,
  });
}
