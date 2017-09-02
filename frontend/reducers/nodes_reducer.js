import merge from 'lodash/merge';

import { UPDATE_NODE_PATH } from '../actions/node_actions';

const NodesReducer = (state = [], action) => {
  Object.freeze(state)
  // let newState = merge({}, state);

  switch(action.type) {
    case UPDATE_NODE_PATH:
      debugger;
      return action.results;
    // case RECEIVE_PHOTO:
    //   const newPhoto = {[action.photo.id]: action.photo};
    //   return merge({}, state, newPhoto);
    // case UPDATE_PHOTO:
    // newState[action.photo.id - 1]= action.photo
    //   return newState
    // case DELETE_LIKE:
    //   newState = {[action.like.author_id]: action.photo};
    //   return merge({}, state, newPhoto);
    default:
      return state;
  }
};

export default NodesReducer;
