import Search from './search';
import { connect } from 'react-redux';
import { newSearch } from '../../actions/search_actions';


const mapStateToProps = state => ({
  results: state.search,
})

const mapDispatchToProps = dispatch => ({
  newSearch: (search_string) => dispatch(newSearch(search_string))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
