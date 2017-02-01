console.log(data);
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
