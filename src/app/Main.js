import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm'
import Results from './Results'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      siteData: this.props.data,
      categories: this.props.categories
    }
    // console.log(this.state.defaultdata)
    console.log(this.state.categories)
  }

  searchInput = (input) => {
  		var queryResult = [];
      var categoryList = this.state.categories
      input = input.toLowerCase()

      var inputList = []
      inputList = input.split(',');
      console.log(inputList)

      inputList.forEach(function(input){

        input = input.trim()

        //when no text in input field, ensure that it shows no results.
        if(input === "") {
          this.setState({
            searchResults: []
          })
        }
        else {
          this.state.siteData.forEach(function(site){
            //if siteName contains input text, push to queryResult
            if (site.siteName.toLowerCase().indexOf(input) !== -1) {
              queryResult.push(site);
            }
            //if siteName does not contain input text, lets look at the site's categories and see if this site's category description contains the input text
            else {
              var site_category_id = site.categoryIds //lists all category IDs associated to the site in Array format
              console.log(site_category_id)

              //we first loop through the site category IDs
              site_category_id.forEach(function(cat){
                console.log("site category no. :" + cat)
                //next, we loop through the categories list
                categoryList.forEach(function(catlist){
                  //if this site's category IDs matches an ID from the category list, we next need to validate if that category's description contain input text, if so, push to queryResult
                  if ( (cat === catlist.id) && (catlist.description.toLowerCase().indexOf(input) !== -1) ) {
                    console.log("category no. : " + catlist.id)
                    queryResult.push(site)
                  }
                })
              })

              console.log(queryResult)
            }

          });

          //if after all those checks, and queryResult is still empty, then display the 'no results' message
          if (queryResult.length === 0) {
            var noResults = {"id": 10, "siteName": "No Results"}
            queryResult.push(noResults)
          }

          //update states of searchResults
          this.setState({
            searchInput: input,
            searchResults: queryResult
          })
        }


      }.bind(this))


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


}

export default Main;
