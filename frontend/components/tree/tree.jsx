import React from 'react';
import NodeContainer from '../node/node_container';

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
    const { nodes, fetchChildren } = this.props;
    if (!nodes) {
      return ''
    } else {
      // debugger;
      return nodes.map(node => (
        <NodeContainer key={node.id} data={node}/>
      )
    );
    }
  }

  render() {
    // const { nodes, fetchChildren } = this.props;
    // const nodeDetails = nodes.map(node => (
    //     <NodeContainer key={node.id} data={node} fetchChildren={fetchChildren}/>
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
