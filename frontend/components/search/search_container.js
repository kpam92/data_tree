import Search from './search';
import { connect } from 'react-redux';
import { newSearch } from '../../actions/search_actions';
import { newPath } from '../../actions/node_actions';
import { updateFocus } from '../../actions/focus_actions';


const mapStateToProps = state => ({
  results: state.search,
})

const mapDispatchToProps = dispatch => ({
  newSearch: (search_string) => dispatch(newSearch(search_string)),
  newPath: (id) => dispatch(newPath(id)),
  updateFocus: (pathname) => dispatch(updateFocus(pathname))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
