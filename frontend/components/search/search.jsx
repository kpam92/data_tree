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
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let searchString = this.state.currSearch;
    this.props.newSearch(searchString)
  }

  updateSearch() {
    return e => this.setState({currSearch: e.target.value})
  }

  handleSearchClick(id){
    const { newPath } = this.props;
    newPath(id);
  }

  renderResults() {
    const { results } = this.props;

    return results.map((result,idx) => (
      <Result key={result.id} data={result} handleSearchClick={this.handleSearchClick.bind(this,result.id)}/>
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
            pattern=".{4,}"
            required title="3 characters minimum"
            required/>
          <button>Search</button>
        </form>
        <div className="search-results">
          {this.props.results.length > 0 ? this.renderResults() : ''}
        </div>
      </div>

    )
  }
};

export default Search;
