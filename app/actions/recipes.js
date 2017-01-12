import * as types from './types';
import Api from '../lib/api';

export function addRecipe() {
  return {
    type: types.ADD_RECIPE
  };
}

export function fetchRecipe(params) {
  return (dispatch, getState) => {
    return Api.get(null, params).then(res => {
      dispatch(setSearchedRecipes({ recipes: res.data }));
    }).catch((ex) => {
      console.log(ex);
    });
  };
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  };
}
