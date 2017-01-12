import * as types from './types';

export function addRecipe() {
  console.log('I in action');
  return {
    type: types.ADD_RECIPE
  };
}
