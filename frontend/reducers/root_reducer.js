import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';
import NodesReducer from './nodes_reducer';
import FocusReducer from './focus_reducer';

const rootReducer = combineReducers({
  curr_node_path: NodesReducer,
  search: SearchReducer,
  focus: FocusReducer,
});

export default rootReducer;
