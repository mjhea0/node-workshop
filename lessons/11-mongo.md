# MongoDB

Let's add [MongoDB](https://www.mongodb.com/) to our app to persist data...

## SQL vs NoSQL

SQL (or relational) databases store data in a relational model, with rows and columns. Rows contain information about a specific entity while the columns are the specific data points.

For example, here's a "person" model:

| first_name | last_name | email                    |
|------------|-----------|--------------------------|
| Michael    | Herman    | michael@realpython.com   |
| John       | Starks    | john@starks.com          |
| Liz        | Lemon     | lemons@aregoodforyou.com |

Data types must be declared to each column, which is defined via a schema.

On the other hand, NoSQL (or non-relational) databases generally do not require schema so you can store unstructured, hierarchical data.

```JSON
[
  {
    "first_name": "Michael",
    "last_name": "Herman",
    "email": "michael@realpython.com"
  },
  {
    "first_name": "John",
    "last_name": "Starks"
  },
  {
    "last_name": "Lemon"
  }
]
```

If you have hierarchical, non-tabular data that will not require a lot of complex queries then use NoSQL. Otherwise use SQL.

> **NOTE:** Review [What is the difference between SQL and NoSQL databases?](https://www.quora.com/What-is-the-difference-between-SQL-and-NoSQL-databases) for more info.

## MongoDB Setup

MongoDB is a type of NoSQL database that stores data in documents (akin to rows in a SQL database). Documents are then added to collections (akin to tables in a SQL database).

So, using the "person" model from above, an individual person would be added to a document and a collection would contain all persons.

Refer to the [official documentation](https://docs.mongodb.com/manual/administration/install-community/) to install MongoDB.

One installed, run `mongo --version` in your terminal to verify the install:

```sh
$ mongo --version
MongoDB shell version v3.4.1
```

Now, let's practice...

## Getting Started

In a new terminal tab, start the Mongo daemon:

```sh
$ mongod
```

> **NOTE:** Make sure to keep this tab open as long as you are interacting with MongoDB.

In a separate terminal tab, start the shell:

```sh
$ mongo
```

Here, we can interact with MongoDB. Create a new database:

```sh
> use test
switched to db test
```

This command will either create a new database if it does not exist or set `test` as the current database if it does exist.

Next, let's add three documents to a new `students` collection:

```sh
> db.students.insert({name: "Michael", age: 33})
> db.students.insert({name: "John", age: 34})
> db.students.insert({name: "Emily", age: 99})
```

Experiment with the following commands:

1. `find`: `db.students.find()`
1. `findOne`: `db.students.findOne({name: "Michael"})`
1. `update`: `db.students.update({name: "John"}, { $set: { name: "James" } })`
1. `remove`: `db.students.remove({name : "Michael"})`

Exit the shell when done (but leave `mongob` running).

## Monk

[Monk](https://github.com/Automattic/monk) is an API used for interacting with MongoDB within Node.

### Getting Started

Install:

```sh
$ npm install --save monk
```

Create a new project, and add a new file called *db.js*:

```javascript
var monk = require('monk');
var database = monk('localhost/test');
var students = database.get('students');

// connect
database
.then(function() {
  console.log('connected!')
})
.catch(function(err) {
  console.log(`something went wrong: ${err}`)
});

// find all students
students.find({})
.then(function(docs) {
  console.log(docs);
})
.catch(function(err) {
  console.log(err);
})
```

Test this out, and then update the JavaScript to:

1. insert a new student
1. find a single student
1. remove a student
1. update a student
1. count all students
1. close the database connection

Refer to the [documentation](https://automattic.github.io/monk/) for more info.

## Gnip

Add Monk to the Gnip App to persist data and wire up the CRUD functions to interact with the database...
