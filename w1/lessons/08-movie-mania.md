# CRUD Project

Movie Mania!

## Getting Started

1. Set up a new project project with the Express Generator (use `express -v ejs`)
1. Once set up, make sure to test the server to ensure all is working correctly
1. Create a new RESTful resource with the following routes:

  | Route      | HTTP Verb | Action             |
  |------------|-----------|--------------------|
  | movies     | GET       | Get all movies     |
  | movies/:id | GET       | Get a single movie |
  | movies     | POST      | Create a movie     |
  | movies/:id | PUT       | Update a movie     |
  | movies/:id | DELETE    | Delete a movie     |
  
1. Manually test each route
1. Write a function to call the [OMDB API](http://www.omdbapi.com/) using the [request](https://github.com/request/request) library, which returns an array of movies. Use this data for your API.
1. Test all routes again
