import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#about-me">About Me</a>
        </li>
        <li className="navigation__item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="navigation__item">
          <a href="#contact">Contact</a>
        </li>
        <li className="navigation__item">
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
