import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import './index.css';

const initialState = {
    isLoading: false,
    count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { ...state, isLoading: action.status };
    case 'INCREMENT':
      return { ...state, count: state.count + action.count };
    case 'DECREMENT':
      return { ...state, count: state.count - action.count };
    default:
      return state;
  }
}

let middleware = applyMiddleware(thunk)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
middleware = compose(middleware, devTools)

const store = createStore(counterReducer, middleware)

const render = () => ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

render()
store.subscribe(render)
