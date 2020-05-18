import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';

import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
  ))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

