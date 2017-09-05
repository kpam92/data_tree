import * as APIUtil from '../util/node_api_util'
//
// export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
//
// export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const UPDATE_NODE_PATH = 'UPDATE_NODE_PATH';
export const SHIFT_NODE_PATH_ONE = 'SHIFT_NODE_PATH_ONE';
//
// export const receivePhotos = photos => ({
//   type: RECEIVE_PHOTOS,
//   photos
// });
// export const receivePhoto = photo => ({
//   type: RECEIVE_PHOTO,
//   photo
// });
export const updateNodePath = results => ({
  type: UPDATE_NODE_PATH,
  results
});
export const shiftNodePathOne = () => ({
  type: SHIFT_NODE_PATH_ONE
});
//
// export const fetchPhotos = () => dispatch => (
//   APIUtil.fetchPhotos().then(photos => (
//     dispatch(receivePhotos(photos))
//   ))
// );
//
// export const addPhoto = (photo) => dispatch => (
//   APIUtil.addPhoto(photo).then(photo => (
//     dispatch(receivePhoto(photo))
//   ))
// );
//
export const newPath = (id) => dispatch => (
  APIUtil.fetchPath(id).then(results => (
    dispatch(updateNodePath(results))
  ))
);
