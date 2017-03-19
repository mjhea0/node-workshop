# React Intro

## Topics

1. Compiling with Webpack and Babel
1. JSX
1. Components - functional vs class-based
1. Props vs State
1. Virtual Dom

## Why React?

1. Flexible
1. Fast
1. Component-based
1. Declarative
1. Simple error handling (with create react app)
1. Strong community

## Create React App

[GitHub Repo](https://github.com/facebookincubator/create-react-app)

### Getting Started

Install:

```sh
$ npm install -g create-react-app
```

Quick start:

```sh
$ create-react-app node-jobs-react
$ cd node-jobs-react
$ npm start
```

> **NOTE:** Make sure you understand what's happening beneath this scenes with webpack and babel. For more, check out [React Intro](https://github.com/mjhea0/react-intro).

### Structure

Your app structure should look like:

```sh
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

Navigate through the "src" folder. What's happening with each one of these files?

1. *App.css*
1. *App.js*
1. *App.test.js*
1. *index.css*
1. *index.js*

Take a look at the *package.json*. What do each of these commands do?

1. "start": "react-scripts start",
1. "build": "react-scripts build",
1. "test": "react-scripts test --env=jsdom",
1. "eject": "react-scripts eject"

### Step 1

Remove everything except the *index.js*:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <h1>Node Jobs</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

What's happening?

1. We created a functional component called `App`, which returns the JSX
1. We then use `render()` to mount the `App` to the DOM

Add bootstrap to the *index.html*.

### Step 2

Update *index.js*:

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.getJobs()
  }

  getJobs() {
    axios.get(`http://localhost:8080/api/v1/jobs`)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); })
  }

  render() {
    return (
      <div className="container">
        <h1>Node Jobs</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

What's happening?

1. `constructor` - runs automatically when an instance is created
1. `super()` calls constructor of `Component`, which we're extending from
1. `getJobs()` makes an AJAX call to our server
1. React is handling the creation of the instance:
    ```javascript
    const Test = new App()
    Test.getJobs()
    test.render()
    ```

Why is it a class?

### Step 3

Update the `getJobs()`:

```javascript
getJobs() {
  axios.get(`http://localhost:8080/api/v1/jobs`)
  .then((res) => { this.setState({ jobs: res.data.data }); })
  .catch((err) => { console.log(err); })
}
```

Add this to the constructor:

```javascript
this.state = {
  jobs: []
}
```

What's happening?

1. `this.state` add `state` property and sets `jobs` to empty array
1. `setState()` async function to update state

### Step 4

Update the `render()`:

```javascript
render() {
  return (
    <div className="container">
      <h1>Node Jobs</h1>
      <ul>
        {
          this.state.jobs.map((job) => {
            return <li key={ job.id }>{ job.title }</li>
          })
        }
      </ul>
    </div>
  )
}
```

What's happening?

1. Iterated over the jobs and created a new element
1. `key`? for react to keep track of each element

### Step 5

Let's create a new component for the job list. Add a new folder called "components" to "src". Add a new file to that folder called *JobList.jsx*:

```javascript
import React from 'react';

const JobList = (props) => {
  return (
    <ul>
      {
        props.jobs.map((job) => {
          return <li key={ job.id }>{ job.title }</li>
        })
      }
    </ul>
  )
}

export default JobList;
```

What's happening?

1. We created a functional component called `JobList`, which returns the JSX

Why is this component a function and not a class? Props? Props vs State?

1. Props - data flows down via `props` (from `state` to `props`), read only
1. State - data tied to a component, read and write

Add the import to *index.js*:

```javascript
import JobList from './components/JobList';
```

Update `render()`:

```javascript
render() {
  return (
    <div className="container">
      <h1>Node Jobs</h1>
      <JobList jobs={ this.state.jobs }/>
    </div>
  )
}
```

What's happening?

1. State is being passed to the `JobList` component as a `prop`

### Step 6

Let's convert the list to a table and add some style:

```javascript
import React from 'react';

const JobList = (props) => {
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Company</th>
        <th>Email</th>
        <th>Contacted?</th>
      </tr>
    </thead>
    <tbody>
      {
        props.jobs.map((job) => {
          return <tr key={job.id}>
          <td>{ job.id }</td>
          <td>{ job.title }</td>
          <td>{ job.description }</td>
          <td>{ job.company }</td>
          <td>{ job.email }</td>
          <td>{ job.contacted ? 'yes' : 'no' }</td>
          </tr>
        })
      }
    </tbody>
  </table>
  )
}

export default JobList;
```
