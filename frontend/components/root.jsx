import React from 'react';
import Tree from './tree/tree';
import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
import SearchContainer from './search/search_container';

const root_node = {id: 1, path: "ImageNet 2011 Fall Release", child_count: 9}
const Root = ({ store }) => (
  <Provider store={ store }>

      <div className='container'>
        <SearchContainer/>
        <div className="tree-container">
          <Tree nodes={[root_node]}/>
        </div>
      </div>

  </Provider>
);

export default Root;
