# Visualization

Let's add a quick bar chart to our app with [Chart.js](https://github.com/chartjs/Chart.js)...

## Getting Started

Create a new project called "chart-example", adding in an *index.html* file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chart.JS Example</title>
  </head>
  <body>
  </body>
</html>
```

Add the Chart.js library dependency from the [CDN](https://cdnjs.com/libraries/Chart.js/):

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.js
"></script>
```

> **NOTE:** What's a CDN again?

Add a canvas element to the HTML:

```html
<canvas id="chart" width="400" height="400"></canvas>
```

Then add the following script tag:

```html
<script>
var ctx = document.getElementById("chart");

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40],
    }
  ]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

var options = {};
</script>
```

Test it out in the browser! Once working, use the [documentation](http://www.chartjs.org/docs/#bar-chart) to play around with chart. Make it your own!

## Gnip

Add Chart.js to the Gnip App...
