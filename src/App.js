import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm'
import Results from './Results'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      defaultData: this.props.data,
      categories: this.props.categories
    }
    // console.log(this.state.defaultdata)
    console.log(this.state.categories)
  }

  searchInput = (input) => {
  		var queryResult = [];
      var categoryList = this.state.categories
      var input = input.toLowerCase()

      if(input == "") {
        this.setState({
          searchResults: []
        })
      }
      else {
        this.state.defaultData.forEach(function(site){
          //if siteName matches query name, push to queryResult
          if (site.siteName.toLowerCase().indexOf(input) != -1) {
            queryResult.push(site);
          }
          //if siteName does not match query name, lets look at categories of the site
          else {
            var site_category_id = site.categoryIds //category IDs in Array associated to the site
            console.log(site_category_id)

            site_category_id.forEach(function(cat){
              console.log("site category no. :" + cat)

              categoryList.forEach(function(catlist){
                if ( (cat == catlist.id) && (catlist.description.toLowerCase().indexOf(input) != -1) ) {
                  console.log("category no. : " + catlist.id)
                  queryResult.push(site)
                }
              })
            })

            console.log(queryResult)
          }

        });

        this.setState({
          searchInput: input,
          searchResults: queryResult
        })
      }
	}

  render() {
    return (
      <div className="Container">
        <h2>Search Container</h2>
        <SearchForm searchInput={this.searchInput}/>
        <Results results={this.state.searchResults}/>
      </div>
    );
  }

  // if (queryResult == null || queryResult == ""){
  //   this.setState({
  //     searchInput: "",
  //     searchResults: [],
  //   })
  // }
  // else {
  //   this.setState({
  //     searchInput: input,
  //     searchResults: queryResult
  //   })
  // }

}

export default App;
