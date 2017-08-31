import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';
import UsersReducer from './users_reducer';
import NodesReducer from './nodes_reducer';

const rootReducer = combineReducers({
  photos: PhotosReducer,
  user: UsersReducer,
  nodes: NodesReducer,
});

export default rootReducer;
