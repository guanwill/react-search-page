import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm'
import Results from './Results'
import Header from './Header'
import Footer from './Footer'
import $ from 'jquery'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
      siteData: this.props.data,
      categories: this.props.categories
    }
  }

  // Function to find results based on user's input
  searchInput = (input) => {
      input = input.toLowerCase()
      var categoryList = this.state.categories

      // Initiate Array to store relevant search results
  		var queryResult = [];

      // To enable multi keyword search, we split user's input text/string and convert it into an array
      var inputList = [];
      inputList = input.split(',');
        console.log(inputList)

      // We run a search in our data per keyword. i.e loop through each keyword/user input text
      inputList.forEach(function(input){
        input = input.trim()

        // When no text in search input field, show no results.
        if (input === "") {
          this.setState({
            searchResults: []
          })
        }

        else {

          // loop through the data and check if we have results where SITENAME matches user's input text.
          // If so, push to queryResult array. If a particular site does not have its name match user's input,
          // we then try to look at the site's categories and see if any categories match user's input

          this.state.siteData.forEach(function(site){

            // if our database have a siteName that contains users input text, push to queryResult
            if (site.siteName.toLowerCase().indexOf(input) !== -1) {
              queryResult.push(site);
            }

            // if our database does not have a siteName that matches users input text, lets look at the site's categories and see if this site's category description contains the input text
            else {
              var site_category_id = site.categoryIds //lists all category IDs associated to the site in Array format

              // loop through this site category IDs
              site_category_id.forEach(function(cat){

                // Next, we loop through the categories list
                categoryList.forEach(function(catlist){

                  //if this site's category IDs matches an ID from the category list, we next need to validate if that category's description matches user's input text. if so, push to queryResult
                  if ( (cat === catlist.id) && (catlist.description.toLowerCase().indexOf(input) !== -1) ) {
                    queryResult.push(site)
                  }

                })
              })

            }

          });

          // if after all those checks, and queryResult is still empty, then display the 'no results' message
          if (queryResult.length === 0) {
            $(function(){
              $('.noResultsContainer').show();
            })
            // var noResults = {"id": 10, "siteUrl": "No Results"}
            // queryResult.push(noResults)
          }
          else {
              $('.noResultsContainer').hide();
          }

          // Update states of searchResults
          this.setState({
            searchInput: input,
            searchResults: queryResult
          })
        }


      }.bind(this))


	}

  render() {
    return (
      <div className="big_container">
          <Header />
            <div className="container_inner">
              <SearchForm searchInput={this.searchInput}/>
              <Results results={this.state.searchResults}/>
            </div>
          <Footer />
      </div>
    );
  }


}

export default Main;
