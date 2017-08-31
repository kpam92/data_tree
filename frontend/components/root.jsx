import React from 'react';
import Tree from './tree/tree';

class Root extends React.Component {
  constructor() {
    super()
  }

  render() {

    const {store} = this.props;
    const root_node = {id: 1, path: "ImageNet 2011 Fall Release", child_count: 9}
    return(
      <Tree nodes={[root_node]}/>
    )
  }
}

export default Root;
