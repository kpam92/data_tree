import merge from 'lodash/merge';
import { RECEIVE_CHILD_NODES, UPDATE_NODE } from '../actions/node_actions';


const NodesReducer = (state = {children: null, root_node: null}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CHILD_NODES:
      newState['children']= action.nodes
      debugger;
      return newState;
    case UPDATE_NODE:
      newState['root_node']= action.node
      return newState
    default:
      return state;
  }
};

export default NodesReducer;
