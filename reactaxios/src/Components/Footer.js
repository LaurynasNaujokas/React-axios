import React, { Component } from 'react';
import 'bulma/css/bulma.css';

 export default class Footer extends Component {

  render() { 
    return (
     <div>
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>React & Bulma</strong> by <a href="https://github.com/LaurynasNaujokas/React-axios">Laurynas</a>.
       Just for fun and educational purposes
        <a href="https://github.com/LaurynasNaujokas/React-axios"> MIT</a>. The website content
      is made for fun <a href="https://github.com/LaurynasNaujokas/React-axios">2018 Denmark</a>.
    </p>
  </div>
</footer>
     </div>
        )
    }
}

