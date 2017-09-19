import React, { Component } from 'react';
import '../App.css';


class SearchForm extends Component {

  getSearchInput() {
    var input = this.titleInput.value; // Grab user input
    this.props.searchInput(input);
  }

  render() {
    return (
      <input type="text" value={this.props.input} ref={(input) => {this.titleInput = input}}  onChange={this.getSearchInput.bind(this)} className="search_input" placeholder="Search"/>
    )
  }

}

export default SearchForm;
