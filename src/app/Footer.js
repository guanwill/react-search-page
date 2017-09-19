import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

  render() {
    return(
      <div className="footer_container">
        <div className="container">

          <div className="footer_top">
            <img className="footer_logo" src="https://s26.postimg.org/htufil721/adslotfoot.png"/>
          </div>

          <div className="footer_bottom">
            <a className="footer_a" href="/">©2012 Adslot</a>
            <a className="footer_a" href="/">Adslot Publisher</a>
            <a className="footer_a" href="/">Adslot Create</a>
            <a className="footer_a" href="/">Terms | Privacy Policy</a>
            <a className="footer_a" href="/">Payment Policy</a>
          </div>


        </div>
      </div>
    );

  }
}

export default Footer;
