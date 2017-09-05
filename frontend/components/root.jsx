import React from 'react';
import Tree from './tree/tree';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import SearchContainer from './search/search_container';

class Root extends React.Component {
  constructor() {
    super()
  }

  render() {

    const {store} = this.props;
    const root_node = {id: 1, path: "ImageNet 2011 Fall Release", child_count: 9}
    return(
      <Provider store={ store }>
        <HashRouter>
          <div className='container'>
            <SearchContainer/>
            <div className="tree-container">
              <Tree nodes={[root_node]}/>
            </div>
            <div className="top-arrow"></div>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default Root;
