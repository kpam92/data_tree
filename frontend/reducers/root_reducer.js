import { combineReducers } from 'redux';
import NodesReducer from './nodes_reducer';

const rootReducer = combineReducers({
  nodes: NodesReducer
});

export default rootReducer;
