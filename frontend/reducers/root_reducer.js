import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';
import NodesReducer from './nodes_reducer';

const rootReducer = combineReducers({
  curr_node_path: NodesReducer,
  search: SearchReducer
});

export default rootReducer;
