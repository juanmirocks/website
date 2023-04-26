import React, { Component } from 'react';
import './App.css';
import profile from "./images/profile.jpg";

export default function App() {
  return (
    <div id="wrapper">

      <section id="main">
        <header>
          {/* Alternative src: "https://twitter.com/juanmirocks/profile_image?size=original" */}
          <span className="avatar"><img src={profile} alt="juanmirocks profile" /></span>
          <h1>Dr. Juan Miguel Cejuela</h1>

          <p>AI & full-stack senior engineer - security architect - consultant<br />I'm happy to support you with <a href="mailto:preload-dry-0w+juanmirocks@icloud.com">short-term projects</a>.<br />Let's connect:</p>

          <ul className="icons">
            <li><a href="https://stackoverflow.com/users/341320/juanmirocks" className="fa-stack-overflow">StackOverflow</a></li>
            <li><a href="https://github.com/juanmirocks" className="fa-github">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/juanmirocks" className="fa-linkedin">LinkedIn</a></li>
            {/* <li><a href="https://twitter.com/juanmirocks" className="fa-twitter">Twitter</a></li> */}
            {/* <li><a href="https://medium.com/@juanmirocks" className="fa-medium">Medium</a></li> */}
            <li><a href="mailto:preload-dry-0w+juanmirocks@icloud.com" className="fa-envelope-o">E-Mail</a></li>
          </ul>
        </header>
      </section>

      <footer id="footer">
        <ul className="copyright">
          <li>© Dr. Juan Miguel Cejuela</li>
        </ul>
      </footer>

    </div>

  );
}

if ('addEventListener' in window) {
  window.addEventListener('load', function () { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
}
