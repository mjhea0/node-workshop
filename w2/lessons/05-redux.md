# Redux Intro

## Principles

1. **Single source of truth**: The *state* of your whole application is stored in an object tree within a single *store*.
1. **State is read-only**: The only way to change the state is to emit an *action*, an object describing what happened.
1. **Changes are made with pure functions**: To specify how the state tree is transformed by actions, you write pure *reducers*.

[Source](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)

## Definitions

Let's start with the [basics](http://redux.js.org/docs/basics/)...

1. State - an object, probably nested
1. Actions - describes intended change of state, declarative
1. Reducers - pure function, which takes the previous state and action as arguments, returns updated state, should be the only thing updating state
1. Store - where state lives

## Example

Again, let's use [Create React App](https://github.com/facebookincubator/create-react-app)...

### Getting Started

```sh
$ create-react-app hello-world-react-redux
$ cd hello-world-react-redux
$ npm start
```

Remove everything in "src" except the *index.js*.

Install Redux:

```sh
$ npm i redux react-redux --save
```

Add the following directories and files to "src":

```sh
$ cd src && mkdir actions components reducers && touch store.js && cd ..
```

Your app structure should look like:

```sh
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── actions
│   ├── components
│   ├── index.js
│   ├── reducers
│   └── store.js
└── yarn.lock
```

### Step 1 - create store

*index.js*:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';

/*
redux
 */
const store = Redux.createStore();

/*
react component
 */
const App = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Why is the `h1` not showing up?

1. `createStore()` takes an reducer, which is a function

Add bootstrap to the *index.html*.

### Step 2 - create reducer

Update `redux` portion of *index.js*:

```javascript
/*
redux
 */
const reducer = (state=0, action) => { return state; }
const store = createStore(reducer);
console.log(store.getState());
```

### Step 3 - add action

Update `redux` portion of *index.js*:

```javascript
/*
redux
 */
const increment = { type: 'INCREMENT' }
const reducer = (state=0, action) => {
  if (action.type === 'INCREMENT') {
    return ++state;
  }
  return state;
}
const store = createStore(reducer);
console.log('before -> ', store.getState());
store.dispatch(increment);
console.log('after -> ', store.getState());
```

### Step 3 - add action

Add a decrement action.

### Step 4 - refactor

1. Update *store.js*:

    ```javascript
    import { createStore } from 'redux';

    import reducer from  './reducers';

    const store = createStore(reducer);

    export default store;
    ```

1. Add an *index.js* file to "reducers":

    ```javascript
    function reducer(state=0, action) {
      if (action.type === 'INCREMENT') {
        return ++state;
      }
      return state;
    }

    export default reducer;
    ```

1. Update `redux` portion of *index.js*, making store add the correct imports:

    ```javascript
    /*
    redux
     */
    const increment = { type: 'INCREMENT' }
    console.log('before -> ', store.getState());
    store.dispatch(increment);
    console.log('after -> ', store.getState());
    ```

1. Add an *index.js* file to "actions":

    ```javascript
    const increment = { type: 'INCREMENT' };

    export default increment;
    ```

1. Add the import to *index.js*.

    ```javascript
    import increment from './actions'
    ```

1. Add an *App.jsx* to "components":

    ```javascript
    import React, { Component } from 'react'

    class App extends Component {

      render() {
        return (
          <div className="container">
            <h1>Hello, World!</h1>
          </div>
        )
      }

    }

    export default App
    ```

1. Add the import to *index.js*.

    ```javascript
    import App from './components/App.jsx'
    ```

### Step 5 - update the component

Update *App.jsx*:

```javascript
import React, { Component } from 'react'

class App extends Component {

  render() {

    return (
      <div className="container">
        <p>Value: <span>{ this.props.value }</span></p>
        <button
          className="btn btn-success"
          onClick={ this.props.onIncrement }
        >+</button>
      </div>
    )
  }

}

export default App
```

Update *index.js*:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'
import store from './store'
import increment from './actions'

const render = () => {
  ReactDOM.render(
    <App
      value={ store.getState() }
      onIncrement={ () => store.dispatch(increment) }
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
```
