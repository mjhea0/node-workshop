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
  addJob($('#add-job-form').serialize())
  .done((res) => {
    $('form').find('input, textarea').val(''); // clear form
    $('tbody').html(''); // clear table
  })
  getAllJobs()
  .done((response) => {
    buildJobsTable(response.data);
    $('#modal').modal('toggle'); // close modal
  })
});

function buildJobsTable(jobs) {
  for (let job of jobs) {
    const element = `<tr>
      <td>${ job.id }</td>
      <td>${ job.title }</td>
      <td>${ job.description }</td>
      <td>${ job.company }</td>
      <td>${ job.email }</td>
      <td>${ job.contacted ? 'yes' : 'no' }</td>
      <td><a href="/jobs/${ job.id }/update" class="btn btn-warning btn-sm" id="update-job">Update</a></td>
      <td><button class="btn btn-danger btn-sm" id="delete-job" data-id="${ job.id }">Delete</button></td>
    </tr>`;
    $('tbody').append(element);
  }
  return true;
}
