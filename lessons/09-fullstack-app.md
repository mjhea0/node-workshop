# Full Stack APP

Let's add a client side to the movie app.

## MVC Structure

Model-View-Controller (MVC) is a design pattern used to separate your application's concerns in order to make it easier to scale.

- Model: the data itself
- View: visual representation of the data
- Controller: link between the model and the view

The controller updates the model based on user actions in the view and also updates the view when the model changes.

> **NOTE:** Check out [Model-View-Controller (MVC) Explained -- With Legos](https://realpython.com/blog/python/the-model-view-controller-mvc-paradigm-summarized-with-legos/) for more info on the MVC design pattern.

Your turn!

Turn back to the movie app - Can you locate the model and the controller? How about the view?

## Server-side Templating

The view is handled/managed with server-side templates. Like the name suggests, server-side templates are generated on the server. So, when a user hits a route, the server responds with the full HTML page, which is then rendered in the browser.

We'll be using [EJS](http://www.embeddedjs.com/) for our server-side templating language. With it, you can add JavaScript-like variables and logic (conditionals, loops) to your templates.

## Full-stack App

Code along!
