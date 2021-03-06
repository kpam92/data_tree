import React from 'react';
import NodeContainer from '../node/node_container';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.renderNodes = this.renderNodes.bind(this);
  }

  renderNodes() {
    const { nodes } = this.props;
    if (!nodes) {
      return ''
    } else {
      return nodes.map((node,idx) => (
        <NodeContainer key={node.id} data={node} lastChild={(nodes.length - 1) == idx ? true : false }/>
      )
    );
    }
  }

  render() {
    return(

        <ul className="tree">
          {this.renderNodes()}
        </ul>

    )
  }
};

export default Tree;
