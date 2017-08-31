import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    return(
      <li>
        <h5>{data.path}</h5>
      </li>
    )
  }
}

export default Node;
