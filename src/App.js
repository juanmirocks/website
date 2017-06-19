import React, { Component } from 'react';
import './App.css';
import profile from "./images/profile.jpg";

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <section id="main">
          <header>
            {/* Alternative src: "https://twitter.com/juanmirocks/profile_image?size=original" */}
            <span className="avatar"><img src={profile} alt="juanmirocks profile" /></span>
            <h1>Sup, I'm Juanmi</h1>

            <p>I'm a data scientist by profession, all text mining things, <a href="https://en.wikipedia.org/wiki/Natural_language_processing">#nlp</a>, <a href="https://en.wikipedia.org/wiki/Natural_language_understanding">#nlu</a>. I'm currently working on <a href="https://www.tagtog.net">tagtog</a>. I'm also happy to help you with <a href="mailto:consult@juanmi.rocks">short-term consultant projects</a>. Let's connect:</p>

            <ul className="icons">
              <li><a href="https://github.com/juanmirocks" className="fa-github">GitHub</a></li>
              <li><a href="https://stackoverflow.com/users/341320/juanmirocks" className="fa-stack-overflow">StackOverflow</a></li>
              <li><a href="https://www.linkedin.com/in/juanmirocks" className="fa-linkedin">LinkedIn</a></li>
              <li><a href="mailto:consult@juanmi.rocks" className="fa-envelope-o">E-Mail</a></li>
              {/* ResearchGate
              Academia
              Angel.co
              Medium
              Tumblr
              Wordpress
              About.me */}
            </ul>

            <p>I live my own way. My passion is in connecting people and ideas, to foster peace, collaboration, and friendship. Here you find the unfiltered side of me:</p>
            <ul className="icons">
              <li><a href="https://www.instagram.com/juanmirocks" className="fa-instagram">Instagram</a></li>
              <li><a href="https://twitter.com/juanmirocks" className="fa-twitter">Twitter</a></li>
              {/* <li><a href="https://www.youtube.com/channel/UCXEObTEkoKT2kRxl5FLx86Q" className="fa-youtube">YouTube</a></li> */}
              <li><a href="https://www.goodreads.com/juanmirocks" className="fa-book">Goodreads</a></li>
              {/* Facebook
              Snapchat
              Musically */}
            </ul>

          </header>

        </section>

        <footer id="footer">
          <ul className="copyright">
            <li>&copy; Juan Miguel Cejuela, aka, <em>@juanmirocks</em></li>
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
