// importing all the functions from recipes action file in an object
import * as recipes from './recipes';
// add all the actions in an ActionCreators to call them when needed
export const ActionCreators = Object.assign({},
  recipes,
);
