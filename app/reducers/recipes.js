import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({}, {

});

export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state, action) {
      console.log('I in reducer');
    return state + 1;
  }
});
