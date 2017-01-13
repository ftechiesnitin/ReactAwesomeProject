import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { AppRegistry } from 'react-native';
// reducers
import reducer from './app/reducers';
// containers
import AppContainer from './app/containers/appContainer';

// Logger only activated for development mode
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configStore(intialState){
  const enhancer = compose(
    applyMiddleware( thunkMiddleware, loggerMiddleware ),
  );
  return createStore(reducer, intialState, enhancer);
}

const store = configStore({});

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('ReactAwesomeProject', () => App );
