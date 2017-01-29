# Deployment

Let's deploy a Node, Express, Mongo app to [Heroku](https://www.heroku.com/)...

## Getting Started

1. Create an account on [Heroku](https://www.heroku.com/).
1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
1. Create a git repo (if you haven't already done so) - `git init`
1. Create a new Heroku app - `heroku create`
1. Make sure your `start` script is defined in the *package.json* file.
1. Commit your code and then deploy: `git push heroku master`
1. Run `heroku open` when done, to open the Heroku URL in your default browser

> **NOTE:** Check out [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for more info.

## Adding MongoLab

If you're app uses Mongo, then you need to create a database in the cloud:

```sh
$ heroku addons:create mongolab
```

The creates a database and sets up a new environment variable, `MONGODB_URI`, which we need to use when our app is deployed. Update your database connection like so:

```javascript
var connection = process.env.MONGODB_URI || 'localhost/test'
var database = monk(connection);
```

Commit and push your code again.
