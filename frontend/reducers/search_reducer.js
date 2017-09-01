import merge from 'lodash/merge';

import { UPDATE_SEARCH } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case UPDATE_SEARCH:
      return action.results;
    // case REMOVE_USER:
    //   return {};
    default:
      return state;
  }
};

export default SearchReducer;
