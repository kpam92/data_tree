import React from 'react';
import Node from '../node/node';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  populateNodes() {
    const { nodes } = this.props;

  }
  handleClick() {

  }

  render() {
    const { nodes } = this.props;
    const nodeDetails = nodes.map(node => (
        <Node key={node.id} data={node}/>
      )
    );

    return(
      <div>
        <ul>
          {nodeDetails}
        </ul>
      </div>
    )
  }
};

export default Tree;
