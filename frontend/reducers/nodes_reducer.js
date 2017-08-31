import merge from 'lodash/merge';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO, UPDATE_NODE } from '../actions/node_actions';
// import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';

const NodesReducer = (state = {children: null, root_node: null}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    // case RECEIVE_PHOTOS:
    //   return action.photos;
    // case RECEIVE_PHOTO:
    //   const newPhoto = {[action.photo.id]: action.photo};
    //   return merge({}, state, newPhoto);
    case UPDATE_NODE:
      newState['root_node']= action.node
      debugger;
      return newState
    default:
      return state;
  }
};

export default NodesReducer;
