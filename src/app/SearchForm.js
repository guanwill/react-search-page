import React, { Component } from 'react';
import '../App.css';


class SearchForm extends Component {

  getSearchInput() {
    // var input = this.titleInput.value.trim();
    var input = this.titleInput.value; // this is the search text
    console.log('searchform')
    console.log(input)
    this.props.searchInput(input);
  }


  render() {
    return (
      <input type="text" value={this.props.input} ref={(input) => {this.titleInput = input}}  onChange={this.getSearchInput.bind(this)} className="search_input" placeholder="Search"/>
    )
  }

}

export default SearchForm;
