import merge from 'lodash/merge';

// import { RECEIVE_USER,REMOVE_USER } from '../actions/user_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    // case RECEIVE_USER:
    //   return action.user;
    // case REMOVE_USER:
    //   return {};
    default:
      return state;
  }
};

export default SearchReducer;
