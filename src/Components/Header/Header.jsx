import { useState } from 'react';

import './Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar-container">

        <div className="logo">
          <h1>Sarbani.</h1>
        </div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>

        {/* Links */}
        <ul className={`link ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techStack">Tech Stack</a></li>
          {/* <li><a href="#About">About</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
           
        <div className="btn">
          <a href="/resume.pdf" download="Sarbani_Resume.pdf" className="resume-btn">Resume</a>
        </div>
           
      </div>
    </header>
  );
};

export default Header;