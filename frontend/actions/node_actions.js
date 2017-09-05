import * as APIUtil from '../util/node_api_util'

export const UPDATE_NODE_PATH = 'UPDATE_NODE_PATH';
export const SHIFT_NODE_PATH_ONE = 'SHIFT_NODE_PATH_ONE';

export const updateNodePath = results => ({
  type: UPDATE_NODE_PATH,
  results
});
export const shiftNodePathOne = () => ({
  type: SHIFT_NODE_PATH_ONE
});

export const newPath = (id) => dispatch => (
  APIUtil.fetchPath(id).then(results => (
    dispatch(updateNodePath(results))
  ))
);
