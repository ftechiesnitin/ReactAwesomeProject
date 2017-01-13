import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedGifs = createReducer({}, {
  [types.SET_SEARCHED_GIFS](state, action) {
    let newState = [];
    action.gifs.forEach(gif => {
      newState.push(gif);
    });
    return newState;
  }
});
