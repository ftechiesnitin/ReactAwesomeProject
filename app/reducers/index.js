// to combine all the reducers
import { combineReducers } from 'redux';
// import all the recipe reducers
import * as recipes from './recipes';

export default combineReducers(Object.assign( recipes ));
