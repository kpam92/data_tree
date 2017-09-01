// import * as APIUtil from '../util/photo_api_util'
//
// export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
//
// export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
//
// export const receivePhotos = photos => ({
//   type: RECEIVE_PHOTOS,
//   photos
// });
// export const receivePhoto = photo => ({
//   type: RECEIVE_PHOTO,
//   photo
// });
export const updateSearch = results => ({
  type: UPDATE_SEARCH,
  results
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
export const newSearch = (search_string) => dispatch => (
  APIUtil.newSearch(search_string).then(results => (
    dispatch(updateSearch(results))
  ))
);
