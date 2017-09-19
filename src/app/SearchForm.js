import React, { Component } from 'react';
import '../App.css';


class SearchForm extends Component {

  getSearchInput() {
    var input = this.titleInput.value; // Grab user input
    this.props.searchInput(input);
  }

  render() {
    return (
      <div className="search_form_container">
        <div className="container">
            <input type="text" value={this.props.input} ref={(input) => {this.titleInput = input}}  onChange={this.getSearchInput.bind(this)} className="search_input" placeholder="Search Publishers"/>
            <a onClick={this.getSearchInput} className="search_button"><span className="glyphicon glyphicon-search"></span></a>
        </div>
      </div>
    )
  }

}

export default SearchForm;
