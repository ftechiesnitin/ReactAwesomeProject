import * as types from './types';
import Api from '../lib/api';

export function fetchGifs(params) {
  return (dispatch, getState) => {
    return Api.get(null, params).then(res => {
      dispatch(setSearchedGifs({ gifs: res.data }));
    }).catch((ex) => {
      console.log(ex);
    });
  };
}

export function setSearchedGifs({ gifs }) {
  return {
    type: types.SET_SEARCHED_GIFS,
    gifs
  };
}
