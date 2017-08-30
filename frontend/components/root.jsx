import React from 'react';
import { Provider } from 'react-redux';
import TreeContainer from './tree/tree_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <TreeContainer/>
  </Provider>
);

export default Root;
