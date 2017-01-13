// to combine all the reducers
import { combineReducers } from 'redux';
// import all the recipe reducers
import * as gifs from './gifs';

export default combineReducers(Object.assign( gifs ));
