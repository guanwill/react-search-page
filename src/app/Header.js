import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery'

class ResultItems extends Component {

  render() {

    $(function(){
      $('.header_close').on('click', function(){
        $('.header_container').hide();
        $('.search_form_container').css({"margin-top": "70px"})
        $('.header_open').show();
      })
      $('.header_open').on('click', function(){
        $('.header_container').show();
        $('.search_form_container').css({"margin-top": "0px"})
        $('.header_open').hide();
      })
    })


    return(
      <div>
        <p className="header_open"><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></p>
        <div className="header_container">
          <div className="container">
            <img className="logo" src="https://s26.postimg.org/4kuanpmgp/adslot.trans.png"/>
            <p className="header_close"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultItems;
