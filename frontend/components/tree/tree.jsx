import React from 'react';
import Node from '../node/node';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.renderNodes = this.renderNodes.bind(this);
  }

  componentDidMount() {

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
      // debugger;
      return nodes.map(node => (
        <Node key={node.id} data={node}/>
      )
    );
    }
  }

  render() {
    // const { nodes, fetchChildren } = this.props;
    // const nodeDetails = nodes.map(node => (
    //     <Node key={node.id} data={node} fetchChildren={fetchChildren}/>
    //   )
    // );

    return(
      <div>
        <ul>
          {this.renderNodes()}
        </ul>
      </div>
    )
  }
};

export default Tree;
