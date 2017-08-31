import Tree from '../tree/tree';
import React from 'react';

import { fetchChildren } from '../../util/node_api_util';

class Node extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ul: null }
    this.handleClick = this.handleClick.bind(this);
    this.renderUl = this.renderUl.bind(this);
    this.fetchChildren = fetchChildren;
  }

  handleClick(e) {
    var { data, nodes } = this.props;
    // debugger;
    this.fetchChildren(data.id).then(nodes => {
      debugger;
      this.setState({ 'ul' :(nodes.map(node => (
        <Tree key={data.id} nodes={nodes}/>
      )
    ))})
    })
    // if (data.child_count > 0 && !this.state.ul) {
    //   debugger;
    //   fetchChildren(data.id)
    //   this.setState({"ul": nodes})
    // }
  }

  componentDidMount() {

  }

  renderUl() {
    return this.state.ul;
  }

  render() {

    const { data } = this.props;
    const children = data.child_count > 0 ? `[${data.child_count}]` : '';
    const child_ul = this.state.ul == 'null' ? '' : this.renderUl()
    return(
      <li>
        <h5 onClick={this.handleClick}>{data.path} {children}</h5>
        {child_ul}
      </li>
    )
  }
}

export default Node;
