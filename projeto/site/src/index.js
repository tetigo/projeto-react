import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import tabelas from './reducers'

import thunk from 'redux-thunk'

// const storeWithMiddleware = applyMiddleware(thunk)(createStore)

// const store = createStore(tabelas)
const store = createStore(tabelas, applyMiddleware(thunk))
// const store = storeWithMiddleware(tabelas)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));