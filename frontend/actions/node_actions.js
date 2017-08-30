import * as APIUtil from '../util/photo_api_util'

export const RECEIVE_CHILD_NODES = 'RECEIVE_CHILD_NODES';
export const UPDATE_NODE = 'UPDATE_NODE';

export const receiveChildNodes = nodes => ({
  type: RECEIVE_CHILD_NODES,
  photos
});
export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});
export const updateNode = node => ({
  type: UPDATE_NODE,
  node
});

export const fetchChildren = (id) => dispatch => (
  APIUtil.fetchChildren(id).then(nodes => (
    dispatch(receiveChildNodes(nodes))
  ))
);

export const fetchInitialNode = () => dispatch => (
  APIUtil.fetchNode(67).then(node => (
    dispatch(updateNode(node))
  ))
);
