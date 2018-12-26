import React, { Component } from 'react';
import 'bulma/css/bulma.css';

 class Navbar extends Component {

  render() { 
    return (
     <div>
         <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://github.com/LaurynasNaujokas/React-axios">
      <img className="imgtest" src="https://img.icons8.com/cotton/2x/christmas-mitten.png" alt="logo" width="50" height="200"/>
    </a>

    <a role="button" href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
        Home
      </a>

      <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
            About
          </a>
          <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
            Jobs
          </a>
          <a href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a  href="https://github.com/LaurynasNaujokas/React-axios" className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="https://github.com/LaurynasNaujokas/React-axios" className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="https://github.com/LaurynasNaujokas/React-axios" className="button is-light">
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