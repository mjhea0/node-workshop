import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import store from './store';
import incrementAction from './actions/increment';
import decrementAction from './actions/decrement';
import Child from './components/Child';


// console.log('before -> ', store.getState());
// store.dispatch(incrementAction);
// store.dispatch(incrementAction);
// store.dispatch(incrementAction);
// console.log('after -> ', store.getState());
// store.dispatch(decrementAction);
// console.log('after decrement -> ', store.getState());


const App = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <br/>
      <p>Value: <span>{  store.getState() }</span></p>
      <button
        className="btn btn-success"
        onClick={ () => store.dispatch(incrementAction) }
      >+</button>
      <br/>
      <Child
        onDecrement={ () => store.dispatch(decrementAction) }
      />
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();
