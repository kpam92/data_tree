import Search from './search';
import { connect } from 'react-redux';
import { newSearch } from '../../actions/search_actions';


// const mapStateToProps = state => ({
//   photos: allPhotos(state),
// })
//
const mapDispatchToProps = dispatch => ({
  newSearch: (search_string) => dispatch(newSearch(search_string))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
