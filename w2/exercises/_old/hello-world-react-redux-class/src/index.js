import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import Calc from './components/Calc'

/*
redux
 */
const operations = {
  add: { type: 'ADD', val: 2 },
  sub: { type: 'SUB', val: 2 },
  mul: { type: 'MUL', val: 2 },
  div: { type: 'DIV', val: 2 }
}

const reducer = (state=0, action) => {
  if (action.type === 'ADD') {return state + action.val;}
  if (action.type === 'SUB') {return state - action.val;}
  if (action.type === 'MUL') {return state * action.val;}
  if (action.type === 'DIV') {return state / action.val;}
  return state;
}
const store = createStore(reducer);

/*
react component
 */
const App = () => {
  return (
    <div className="container text-center col-xs-3 col-xs-offset-5">
      <Calc
        value={store.getState()}
        add={ () => store.dispatch(operations.add) }
        sub={ () => store.dispatch(operations.sub) }
        mul={ () => store.dispatch(operations.mul) }
        div={ () => store.dispatch(operations.div) }
      />
    </div>
  )
}
/*
react render
 */
const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()
