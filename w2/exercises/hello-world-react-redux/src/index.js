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
