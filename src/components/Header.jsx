import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
  &lt;<span className="white-text">Mohsin</span> / <span className="white-text">Nawaz</span>&gt;
</div>

      <nav>
        <ul>
          <li><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} offset={-80} duration={500}>Skills</Link></li>
          <li><Link to="education" smooth={true} offset={-80} duration={500}>Education</Link></li>
          <li><Link to="certificates" smooth={true} offset={-80} duration={500}>Certificate</Link></li>
          <li><Link to="experience" smooth={true} offset={-80} duration={500}>Experience</Link></li>
          <li><Link to="project" smooth={true} offset={-80} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} offset={-80} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
