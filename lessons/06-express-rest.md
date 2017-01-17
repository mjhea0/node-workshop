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

1. Add the new route to *app.js*:

  ```javascript
  app.use('/puppies', puppies);
  ```

  Make sure to require in the routes as well:

  ```javascript
  var puppies = require('./routes/puppies');
  ```

1. Add a new set of routes to the "routes" folder called *puppies.js*:

  ```javascript
  var express = require('express');
  var router = express.Router();

  module.exports = router;
  ```

### GET ALL Puppies

```javascript
var puppies = [
  {
    id: 1,
    name: 'Jim',
    breed: 'Collie',
    tendencies: ['pees on trees'],
    alive: true
  },
  {
    id: 2,
    name: 'John',
    breed: 'Bulldog',
    tendencies: ['bites faces'],
    alive: true
  },
  {
    id: 3,
    name: 'Emily',
    breed: 'Doxon',
    tendencies: ['tricks', 'singing'],
    alive: false
  },
  {
    id: 4,
    name: 'Harrison',
    breed: 'Golden Retriever',
    tendencies: ['retrieving things', 'tolerant of insults'],
    alive: true
  },
  {
    id: 5,
    name: 'Harrison',
    breed: 'Pitbull',
    tendencies: ['cuddling'],
    alive: true
  }
];

router.get('/', function(req, res, next) {
  res.json({
    status: 'success',
    results: puppies
  });
});
```

### GET Single Puppy

```javascript
router.get('/:id', function(req, res, next) {
  // get id
  var id = parseInt(req.params.id);
  // iterate through puppy array
  var singlePuppy = puppies.filter(function(puppy) {
    return puppy.id === id;
  });
  if (singlePuppy.length) {
    res.json({
      status: 'success',
      results: singlePuppy[0]
    });
  } else {
    res.json({
      status: 'success',
      results: 'Puppy does not exist!'
    });
  }
});
```

### POST

To be continued...
