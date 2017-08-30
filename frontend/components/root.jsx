import React from 'react';
import { Provider } from 'react-redux';
import TreeContainer from './tree/tree_container';

// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <TreeContainer/>
//   </Provider>
// );

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger;
  }

  render() {

    var {store} = this.props;

    return(
      <Provider store={ store }>
        <TreeContainer/>
      </Provider>
    )
  }
}

export default Root;
