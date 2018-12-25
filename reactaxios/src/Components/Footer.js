import React, { Component } from 'react';
import 'bulma/css/bulma.css';


 class Footer extends Component {

  render() { 
    return (
     <div>
       <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Laurynas</a>. Just for fun and educational purposes
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is made for fun <a href="">2018 Denmark</a>.
    </p>
  </div>
</footer>
     </div>
        )
    }
}

export default Footer;