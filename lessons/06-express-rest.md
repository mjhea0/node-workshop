# RESTful APIs with Express

## Intro to REST

REST is a architectural style for handling communication between the client and server. In essence, you structure your server-side API around resources:

| Route      | HTTP Verb | Action             |
|------------|-----------|--------------------|
| tweets     | GET       | Get all tweets     |
| tweets/:id | GET       | Get a single tweet |
| tweets     | POST      | Create a tweet     |
| tweets/:id | PUT       | Update a tweet     |
| tweets/:id | DELETE    | Delete a tweet     |

In the above example, `tweets` is the resource. You refer to all tweets as the collection while a single tweet is an element.

> **NOTE:** Please read [REST Quick Tips](http://www.restapitutorial.com/lessons/restquicktips.html) for more info on structuring a RESTful app.

## Express Generator

We can use the [express-generator](https://expressjs.com/en/starter/generator.html) to create a quick boilerplate. Install it globally:

```sh
$ npm install express-generator -g
```

Create a new app like so:

```sh
$ express puppy-api
```

Install the dependencies:

```sh
$ cd puppy-api
$ npm install
```

Run `npm start` to test. Kill the server. Open up the project in your code editor and then run `nodemon`.

## Puppy API

Let's create an API together!

### Route Setup

Create a new set of routes:

1. Update app.js
1. Duplicate a route

### App Middleware

TBD

### Test

cURL/HTTPie
