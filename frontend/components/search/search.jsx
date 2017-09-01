import React from 'react';
import Node from '../node/node';
import Result from './result';

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {currSearch: ""}
    this.handleClick = this.handleClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let searchString = this.state.currSearch;
    this.props.newSearch(searchString)
  }

  updateSearch() {
    return e => this.setState({currSearch: e.target.value})
  }

  renderResults() {
    const { results } = this.props;
    debugger;
    return results.map((result,idx) => (
      <Result key={result.id} data={result}/>
    ));
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
        <div className="search-results">
          {this.renderResults()}
        </div>
      </div>

    )
  }
};

export default Search;
