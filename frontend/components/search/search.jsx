import React from 'react';
import Node from '../node/node';

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {currSearch: ""}
    this.handleClick = this.handleClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let newSearch = this.state.currSearch;
    debugger;
  }

  updateSearch() {
    return e => this.setState({currSearch: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleClick}>
          <input
            value={this.state.currNewSearch}
            onChange={this.updateSearch()}
            className="input"
            placeholder="e.g. marsupial"
            required/>
          <button>Search</button>
        </form>
      </div>

    )
  }
};

export default Search;
