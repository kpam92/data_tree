import Tree from '../tree/tree';
import React from 'react';

import { fetchChildren } from '../../util/node_api_util';

class Node extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ul: null,
      childVisible: 'hidden'
     }

    this.handleClick = this.handleClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.renderUl = this.renderUl.bind(this);
    this.fetchChildren = fetchChildren;
  }

  handleClick(e) {
    e.preventDefault();

    var { data, nodes } = this.props;
    if (data.child_count > 0 && !this.state.ul) {
      this.toggleVisibility();
      this.fetchChildren(data.id).then(nodes => {

        this.setState({ 'ul' :(<Tree key={`tree-${data.id}`} nodes={nodes}/>)});
      })
    } else if (this.state.ul) {
      this.toggleVisibility();
    }
  }



  componentDidMount() {

  }
  toggleVisibility() {
    var css = (this.state.childVisible === "hidden") ? "show" : "hidden";
    this.setState({"childVisible": css});
  }

  renderUl() {
    return this.state.ul;
  }

  render() {

    const { data } = this.props;
    const children = data.child_count > 0 ? `[ ${data.child_count} ]` : '';
    const child_ul = this.state.ul == 'null' ? '' : this.renderUl()
    return(
      <li>
        <a onClick={this.handleClick}>{data.path} {children}</a>
        <div className={this.state.childVisible}>
          {child_ul}
        </div>
      </li>
    )
  }
}

export default Node;
