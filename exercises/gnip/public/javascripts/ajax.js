$(document).ready(function() {
  $('#search-info').hide();
});

$('form').on('submit', function(event) {
  event.preventDefault();
  console.log('working!');
  var searchTerm = $('#search-term').val();
  var payload = {
    searchTerm: searchTerm
  };
  $.ajax({
    method: 'POST',
    url: '/api',
    data: payload
  })
  .done(function(response) {
    $('#search-term').val('');
    var data = response.data;
    $('#search-info').show();
    $('#search-info-span').text(searchTerm);
    var ctx = document.getElementById("chart");
    var chartLabels = data.map(function(el) {
      return el.number;
    });
    var counts = data.map(function(el) {
      return el.count;
    });
    var chartData = {
      labels: chartLabels,
      datasets: [{
        label: '# of Tweets',
        data: counts,
      }]
    };
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          yAxes: [{ ticks: { beginAtZero:true } }]
        }
      }
    });
  });
  fetch('/api', {
  	method: 'POST',
    body: payload
  }).then(function(response) {
    // resolve the promise
  });
});
