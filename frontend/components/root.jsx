import React from 'react';
import { Provider } from 'react-redux';
import Tree from './tree/tree';
// import { fetchInitialNode, fetchChildren } from '../actions/node_actions'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   debugger;
  // }

  render() {

    const {store} = this.props;
    const root_node = {id: 67, path: "ImageNet 2011 Fall Release", child_count: 9}
    return(
      <Provider store={ store }>
        <Tree nodes={[root_node]}/>
      </Provider>
    )
  }
}

export default Root;
