import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <section id="main">
          <header>
            <span className="avatar"><img src="https://twitter.com/juanmirocks/profile_image?size=original" alt="" /></span>
            <h1>Sup, I'm Juanmi</h1>
            <p>Senior Psychonautics Engineer</p>
          </header>

          <footer>
            <ul className="icons">
              <li><a href="#s" className="fa-twitter">Twitter</a></li>
              <li><a href="#b" className="fa-instagram">Instagram</a></li>
              <li><a href="#c" className="fa-facebook">Facebook</a></li>
            </ul>
          </footer>
        </section>

        <footer id="footer">
          <ul className="copyright">
            <li>&copy; Juan Miguel Cejuela</li>
          </ul>
        </footer>

      </div>

    );
  }
}

if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

export default App;
