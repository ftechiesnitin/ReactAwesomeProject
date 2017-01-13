// importing all the functions from gifs action file in an object
import * as gifs from './gifs';
// add all the actions in an ActionCreators to call them when needed
export const ActionCreators = Object.assign({},
  gifs,
);
