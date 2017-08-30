import React from 'react';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  populateNodes() {
    var { nodes } = this.props;

  }
  handleClick() {

  }

  render() {
    return(
      <h1>Tree talking</h1>
    )
  }
};

export default Tree;
