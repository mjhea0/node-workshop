import React from 'react';
import ReactDOM from 'react-dom';

import store from './store'
import incrementAction from './actions'
import Child from './components/Child'

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
        onIncrement={ () => store.dispatch(incrementAction) }
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
render()
