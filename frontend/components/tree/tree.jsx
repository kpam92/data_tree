import React from 'react';
import Node from '../node/node';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.renderNodes = this.renderNodes.bind(this);
  }

  populateNodes() {
    const { nodes } = this.props;

  }
  handleClick() {

  }

  renderNodes() {
    const { nodes } = this.props;
    if (!nodes) {
      return ''
    } else {
      return nodes.map(node => (
        <Node key={node.id} data={node}/>
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
