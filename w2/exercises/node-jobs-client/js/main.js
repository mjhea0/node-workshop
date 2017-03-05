$(function() {
  getAllJobs()
  .done((res) => { buildJobsTable(res.data); } )
  .fail((err) => { console.log(err); });
});

$('body').on('click', '#delete-job', function() {
  // TODO: add confirm; if no more jobs, display message
  $(this).closest('tr').empty(); // remove <tr>
  deleteJob($(this).data('id')) // update server-side
  .done((res) => { console.log('job removed!'); })
  .fail((err) => { console.log(err); });
});

$('body').on('submit', '#add-job-form', function(event) {
  event.preventDefault();
  return addJob($('#add-job-form').serialize())
  .then((res) => {
    $('#add-job-form').find('input, textarea').val(''); // clear form
    $('tbody').html(''); // clear table
    return getAllJobs()
  })
  .then((response) => {
    buildJobsTable(response.data);
    $('#modal').modal('hide'); // close modal
  })
  .catch((err) => { console.log(err); });
});

$('body').on('click', '#update-job', function() {
  $('#update-modal').modal('show'); // show modal
  return getJob($(this).data('id'))
  .then((res) => { buildUpdateModal(res.data[0]); })
  .catch((err) => { console.log(err); })
});

$('body').on('submit', '#update-job-form', function(event) {
  event.preventDefault();
  return updateJob($(this).data('id'), $('#update-job-form').serialize())
  .then((res) => {
    $('#update-job-form').find('input, textarea').val(''); // clear form
    $('tbody').html(''); // clear table
    return getAllJobs()
  })
  .then((response) => {
    buildJobsTable(response.data);
    $('#update-modal').modal('hide'); // close modal
  })
  .catch((err) => { console.log(err); });
});

function buildJobsTable(jobs) {
  for (let job of jobs) {
    const element = `
      <tr>
        <td>${ job.id }</td>
        <td>${ job.title }</td>
        <td>${ job.description }</td>
        <td>${ job.company }</td>
        <td>${ job.email }</td>
        <td>${ job.contacted ? 'yes' : 'no' }</td>
        <td><button class="btn btn-warning btn-sm" data-id="${ job.id }" id="update-job">Update</button></td>
        <td><button class="btn btn-danger btn-sm" id="delete-job" data-id="${ job.id }">Delete</button></td>
      </tr>`;
    $('tbody').append(element);
  }
  return true;
}

function buildUpdateModal(job) {
  const element = `
    <form id="update-job-form" data-id="${ job.id }" style="margin:20px">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" name="title" id="title" value="${ job.title }" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" rows="3" name="description" id="description" required>${ job.description }</textarea>
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" class="form-control" name="company" id="company" value="${ job.company }" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" value="${ job.email }" required>
      </div>
      <div class="form-group">
        <label for="contacted">Contacted?</label>
        <select name="contacted" id="contacted">
          <option value="0" ${ !job.contacted ? '' : 'selected' }>No</option>
          <option value="1" ${ job.contacted ? 'selected' : '' }>Yes</option>
        </select>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id="update-job-modal-button">Update</button>
      </div>
    </form>`;
  $('.update-modal-body').html(element);
  return true;
}
