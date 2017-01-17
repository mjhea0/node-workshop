# Outline

v0.0.6

### End Goal

Build a full-stack application with Node and Express where the user can authenticate via Twitter. Once authenticated, the user is then displayed some nice charts and graphs populated with data from the Twitter API.

### Example Code

Make sure to create a new directory on your machine called "node-workshop" to house all of your projects for these workshops. Each individual assignment should be placed within that directory. Make sure to add a git repo to each directory.

## Day 0

1. [Pre-work](lessons/00-prework.md) (please complete before the first session)

## Day 1

- Topics: JavaScript Review, Higher-Order Functions, Callbacks, es6
- Duration: 3 to 4 hours

Outline:

1. [JavaScript Review](lessons/01-js_review.md)
1. [Higher-Order Functions](lessons/02-hof.md)
1. [Callbacks](lessons/03-callbacks.md)
1. Homework
  - Review the above lessons, paying close attention to the *Your turn!* parts.
  - Finish working through learnyounode
  - Work through as many of the [challenges](challenges) as you can

## Day 2

1. Stand-up:
  - How did the homework go?
  - What did we cover last time?
1. [Intro to Node](lessons/04-node-intro.md)
1. [Intro to Express](lessons/05-express-intro.md)
1. [RESTful APIs with Express](lessons/06-express-rest.md)
1. CRUD Project - movie mania
  1. Set up a new project
  1. Create a new RESTful resource with the following routes:

    | Route      | HTTP Verb | Action             |
    |------------|-----------|--------------------|
    | movies     | GET       | Get all movies     |
    | movies/:id | GET       | Get a single movie |
    | movies     | POST      | Create a movie     |
    | movies/:id | PUT       | Update a movie     |
    | movies/:id | DELETE    | Delete a movie     |

  1. Write a function to call the [OMDB API](http://www.omdbapi.com/) using the [request](https://github.com/request/request) library, which returns an array of movies. Use this data for your API.
1. Homework
  - Create a new API with the resources of your choice - i.e., cars, animals, cookies, bikes, bananas, coffees...
  - TBD

## Day 3

### MongoDB

1. SQL vs NoSQL
1. Mongo and Mongoose Setup

### Full Stack

1. Client vs. Server, MVC Structure
1. Server-side Templating
1. Full-stack App

### Project

1. https://www.nutritionix.com/business/api

### Homework

1. http://developer.nytimes.com/

## Day 3

### Deployment

1. Project Setup
1. DB Setup
1. Deploy!

### Auth w/Passport

1. TBD

### Full-stack Project

1. TBD
