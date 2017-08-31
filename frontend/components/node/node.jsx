import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.data.child_count > 0) {
      debugger;
    }
  }
  render() {
    const { data } = this.props
    const children = data.child_count > 0 ? `[${data.child_count}]` : ''
    return(
      <li onClick={this.handleClick}>
        <h5>{data.path} {children}</h5>
      </li>
    )
  }
}

export default Node;
