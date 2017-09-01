import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';
import NodesReducer from './nodes_reducer';

const rootReducer = combineReducers({
  nodes: NodesReducer,
  search: SearchReducer
});

export default rootReducer;
