import React from 'react';

class Tree extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
