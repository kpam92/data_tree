import Node from './node';
import { connect } from 'react-redux';
// import { newSearch } from '../../actions/search_actions';
import { shiftNodePathOne } from '../../actions/node_actions';


const mapStateToProps = state => ({
  curr_node_path: state.curr_node_path,
})

const mapDispatchToProps = dispatch => ({
  shiftNodePathOne: () => dispatch(shiftNodePathOne())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node);
