function getAllJobs() {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/jobs',
  });
}

function getJob(id) {
  return $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/v1/jobs/${ id }`,
  });
}

function addJob(data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: `http://localhost:3000/api/v1/jobs`,
  });
}

function updateJob(id, data) {
  return $.ajax({
    method: 'PUT',
    data: data,
    url: `http://localhost:3000/api/v1/jobs/${ id }`,
  });
}

function deleteJob(id) {
  return $.ajax({
    method: 'DELETE',
    url: `http://localhost:3000/api/v1/jobs/${ id }`,
  });
}
