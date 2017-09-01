import * as APIUtil from '../util/search_api_util'
// import { fetchPhoto } from './photo_actions'
// export const RECEIVE_LIKE = 'ADD_LIKE';
// export const DELETE_LIKE = 'DELETE_LIKE';
//
//
// export const receiveLike = photos => ({
//   type: RECEIVE_LIKE,
//   photos
// });
// export const removeLike = like => ({
//   type: DELETE_LIKE,
//   like
// });
//
// export const destroyLike = (id) => dispatch => (
//   APIUtil.destroyLike(id).then(like => (
//     dispatch(fetchPhoto(like.author_id))
//   ))
// );
//
// export const addLike = (like) => dispatch => (
//   APIUtil.addLike(like).then(like => (
//     dispatch(fetchPhoto(like.author_id))
//   ))
// );
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const updateSearch = results => ({
  type: UPDATE_SEARCH,
  results
});
export const newSearch = (search_string) => dispatch => (
  APIUtil.newSearch(search_string).then(results => (
    dispatch(updateSearch(results))
  ))
);
