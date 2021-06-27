import React from 'react';
import Nav from '../Nav';
import MoonImage from '../../assets/images/header-graphics/moon.png';


function Header() {
  return (
        <header className="header-section bg-dark">
              <Nav></Nav>
              <div className="header-hero bg-dark-card round-borders">
                <div className="header-lines">
                  <h2>Full Stack Web Developer,</h2>
                  <h2>Health Care Professional,</h2>
                  <h2>and Creative Problem Solver</h2>
                </div>
                <a href="#contact" className="btn-grad btn-cta">LET'S WORK TOGETHER!</a>
              </div>

              <img src={MoonImage} className="moon-image" alt="moon"></img>

              <div className="arrow-link">
                <a href="#about"><i class="fas fa-chevron-down icon-arrow"></i></a>
              </div>
        </header>
  );
}

export default Header;