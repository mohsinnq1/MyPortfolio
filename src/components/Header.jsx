import './Header.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          &lt;<span className="white-text">Mohsin</span> / <span className="white-text">Nawaz</span>&gt;
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className="desktop-nav">
          <ul>
            <li><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} offset={-80} duration={500}>Skills</Link></li>
            <li><Link to="education" smooth={true} offset={-80} duration={500}>Education</Link></li>
            <li><Link to="certificates" smooth={true} offset={-80} duration={500}>Certificate</Link></li>
            <li><Link to="project" smooth={true} offset={-80} duration={500}>Projects</Link></li>
            <li><Link to="experience" smooth={true} offset={-80} duration={500}>Experience</Link></li>
            <li><Link to="contact" smooth={true} offset={-80} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Sidebar + Overlay for mobile */}
      {isMenuOpen && (
        <>
          <div className="sidebar">
            <ul>
              <li><Link to="about" smooth={true} offset={-80} duration={500} onClick={closeMenu}>About</Link></li>
              <li><Link to="skills"  smooth={true} offset={-80} duration={500} onClick={closeMenu}>Skills</Link></li>
              <li><Link to="education"  smooth={true} offset={-80} duration={500} onClick={closeMenu}>Education</Link></li>
              <li><Link to="certificates"  smooth={true} offset={-80} duration={500}  onClick={closeMenu}>Certificate</Link></li>
              <li><Link to="project"  smooth={true} offset={-80} duration={500} onClick={closeMenu}>Projects</Link></li>
              <li><Link to="experience"  smooth={true} offset={-80} duration={500} onClick={closeMenu}>Experience</Link></li>
              <li><Link to="contact"  smooth={true} offset={-80} duration={500} onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
          <div className="overlay" onClick={closeMenu}></div>
        </>
      )}
    </>
  );
}

export default Header;
