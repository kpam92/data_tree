import Tree from '../tree/tree';
import React from 'react';
import ReactDOM from 'react-dom';


import { fetchChildren } from '../../util/node_api_util';

class Node extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ul: null,
      childVisible: 'hidden',
      highlight: ''
     }

    this.handleClick = this.handleClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.renderUl = this.renderUl.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.checkPath = this.checkPath.bind(this);
    this.fetchChildren = fetchChildren;
  }
  componentDidUpdate(){
    this.checkPath();

    if (document.getElementsByClassName('highlight').length == 1) {
      const currHighlight = document.getElementsByClassName('highlight')[0];
      window.scrollTo(0,currHighlight.offsetTop - 40);
    }
  }
  componentWillMount(){
    this.checkPath();
  }

  checkPath(){
    const { curr_node_path, data,shiftNodePathOne } = this.props;

    if (curr_node_path[0] == data.path && curr_node_path.length > 1) {
      shiftNodePathOne();
      this.getChildren('path');
    } else if (curr_node_path[0] == data.path) {
      shiftNodePathOne();
      this.setState({'highlight':'highlight'})
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.getChildren('click');
  }

  getChildren(action){
    var { data, nodes } = this.props;
    if (data.child_count > 0 && !this.state.ul) {
      this.toggleVisibility('click');
      this.fetchChildren(data.id).then(nodes => {

        this.setState({ 'ul' :(<Tree key={`tree-${data.id}`} nodes={nodes}/>)});
      })
    } else if (this.state.ul) {
      this.toggleVisibility(action);
    }
  }

  toggleVisibility(action) {
    if (action == 'click') {
      var css = (this.state.childVisible === "hidden") ? "show" : "hidden";
      this.setState({"childVisible": css});
    } else if (action == 'path') {
      this.setState({"childVisible": "show"})
    }
  }

  renderUl() {
    return this.state.ul;
  }

  render() {

    const { data, lastChild } = this.props;
    const children = data.child_count > 0 ? `[ ${data.child_count} ]` : '';
    const child_ul = this.state.ul == 'null' ? '' : this.renderUl()
    return(
      <li className={lastChild ? 'last-child': ''}>
        <div className={this.state.highlight} ref={`node-${data.id}`}>
          <a onClick={this.handleClick}>{data.path} {children}</a>
        </div>
        <div className={this.state.childVisible}>
          {child_ul}
        </div>
      </li>
    )
  }
}

export default Node;
