import Node from './node';
import { connect } from 'react-redux';
import { shiftNodePathOne } from '../../actions/node_actions';
import { updateFocus } from '../../actions/focus_actions';


const mapStateToProps = state => ({
  curr_node_path: state.curr_node_path,
  focus: state.focus
})

const mapDispatchToProps = dispatch => ({
  shiftNodePathOne: () => dispatch(shiftNodePathOne()),
  updateFocus: (pathname) => dispatch(updateFocus(pathname))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node);
