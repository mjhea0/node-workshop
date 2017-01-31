# Bootstrap

Bootstrap is a front-end CSS framework that provides a set of pre-written CSS rules used to apply styles to HTML elements. It's particularly useful for making sites responsive based on the screen size.

> **NOTE:** Review [Getting Started With Bootstrap 3](https://realpython.com/blog/python/getting-started-with-bootstrap-3/) to quickly get up and running with Bootstrap.

## Quick Start

Using the full-stack, Gnip app, add the Bootstrap dependencies to the `head` of *gnip.ejs* from [BootstrapCDN](https://www.bootstrapcdn.com/):

```html
<head>
  <title>test</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="/stylesheets/style.css" />
</head>
```

Questions:

1. Why did we add the dependency above the custom stylesheet, *style.css*?
1. Why is there a JavaScript dependency as well?
1. What's a CDN?

Let's add a grid and style the form...
