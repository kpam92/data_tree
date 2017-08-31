import React from 'react';
import Tree from './tree/tree';
import Search from './search/search';

class Root extends React.Component {
  constructor() {
    super()
  }

  render() {

    const {store} = this.props;
    const root_node = {id: 1, path: "ImageNet 2011 Fall Release", child_count: 9}
    return(
      <div className='container'>
        <Search/>
        <div className="tree-container">
          <Tree nodes={[root_node]}/>
        </div>
      </div>
    )
  }
}

export default Root;
