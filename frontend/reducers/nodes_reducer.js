import merge from 'lodash/merge';

import { UPDATE_NODE_PATH, SHIFT_NODE_PATH_ONE } from '../actions/node_actions';

const NodesReducer = (state = [], action) => {
  Object.freeze(state)
  let newState = merge([], state);

  switch(action.type) {
    case UPDATE_NODE_PATH:
      return action.results;
    case SHIFT_NODE_PATH_ONE:
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default NodesReducer;
