import merge from 'lodash/merge';

import { UPDATE_FOCUS } from '../actions/focus_actions';

const FocusReducer = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_FOCUS:
      return action.pathname;
    default:
      return state;
  }
};

export default FocusReducer;
