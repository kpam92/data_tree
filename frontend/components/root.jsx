import React from 'react';
import { Provider } from 'react-redux';
import TreeContainer from './tree/tree_container';
// import { fetchInitialNode, fetchChildren } from '../actions/node_actions'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   debugger;
  // }

  render() {

    var {store} = this.props;
    var root_node = {id: 67, path: "ImageNet 2011 Fall Release"}
    return(
      <Provider store={ store }>
        <TreeContainer nodes={[root_node]}/>
      </Provider>
    )
  }
}

export default Root;
