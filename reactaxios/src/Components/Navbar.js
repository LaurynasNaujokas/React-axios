import React, { Component } from 'react';
import 'bulma/css/bulma.css';


 class Navbar extends Component {

  render() { 
    return (
     <div>
         <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="">
      <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28"/>
    </a>

    <a role="button" href className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href className="navbar-item">
        Home
      </a>

      <a href className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a href className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a href className="navbar-item">
            About
          </a>
          <a href className="navbar-item">
            Jobs
          </a>
          <a href className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a  href className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
     </div>
        )
    }
}

export default Navbar;