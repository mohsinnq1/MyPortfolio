import './Skills.css';
import { useEffect } from 'react';
import { FaGamepad } from "react-icons/fa";
import unity from './unity.png';
import csharp from './csharp.png';
import figma from './figma.jpg';
import xd from './xd.png';
import androidstudio from './androidstudio.png';
import flutter from './flutter.png';
import java from './java.png';
import dart from './dart.png';
import git from './git.png';
import github from './github.png';
import linux from './linux.png';
import winser from './winser.jpg';
import python from './python.jpg';
import bash from './bash.png';
import nmap from './nmap.jpg';
import wireshark from './python.jpg';
import burpsuite from './burpsuite.jpg';

function Skills() {
  useEffect(() => {
  const boxes = document.querySelectorAll('.skill-box');
  
  boxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      box.classList.add('tilted');
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = `rotateX(0deg) rotateY(0deg)`;
      box.classList.remove('tilted');
    });
  });
}, []);
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <h3>“I have developed a diverse skill set through education, experience, and continuous learning. My core skills include the following.”</h3>

      <div className="skills-grid">
        <div className="skill-box">
    <h4>Game Development</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={unity} alt="Unity" />
        <span>Unity</span>
      </div>
      <div className="skill-item">
        <img src={csharp} alt="C#" />
        <span>C#</span>
      </div>
      <div className="skill-item">
        <FaGamepad />
        <span>Level Design</span>
      </div>
    </div>
  </div>

<div className="skill-box">
    <h4>UI/UX Design</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={figma} alt="Figma" />
        <span>Figma</span>
      </div>
      <div className="skill-item">
        <img src={xd} alt="Adobe XD" />
        <span>Adobe XD</span>
      </div>
    </div>
  </div>
  <div className="skill-box">
    <h4>Android App Development</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={flutter} alt="Flutter" />
        <span>Flutter</span>
      </div>
      <div className="skill-item">
        <img src={dart} alt="Dart" />
        <span>Dart</span>
      </div>
      <div className="skill-item">
        <img src={androidstudio} alt="Android Studio" />
        <span>Android Studio</span>
      </div>
      <div className="skill-item">
        <img src={java} alt="Java" />
        <span>JAVA</span>
      </div>
    </div>
  </div>
<div className="skill-box">
    <h4>Cybersecurity Tools</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={wireshark} alt="wireshark" />
        <span>Wireshark</span>
      </div>
      <div className="skill-item">
        <img src={nmap} alt="nmap" />
        <span>Nmap</span>
      </div>
      <div className="skill-item">
        <img src={burpsuite} alt="Burp Suite" />
        <span>Burp Suite</span>
      </div>
    </div>
  </div>
  <div className="skill-box">
    <h4>Programming Languages</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={python} alt="python" />
        <span>Python</span>
      </div>
      <div className="skill-item">
        <img src={java} alt="Java" />
        <span>JAVA</span>
      </div>
      <div className="skill-item">
        <img src={bash} alt="bash" />
        <span>Bash</span>
      </div>
      <div className="skill-item">
        <img src={csharp} alt="csharp" />
        <span>C#</span>
      </div>
    </div>
  </div>
  <div className="skill-box">
    <h4>Operating Systems</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={linux} alt="linux" />
        <span>Linux</span>
      </div>
      <div className="skill-item">
        <img src={winser} alt="window server" />
        <span>Windows Server</span>
      </div>
    </div>
  </div>
  <div className="skill-box">
    <h4>Version Control</h4>
    <div className="skill-items">
      <div className="skill-item">
        <img src={git} alt="git" />
        <span> Git</span>
      </div>
      <div className="skill-item">
        <img src={github} alt="github" />
        <span>GitHub</span>
      </div>
    </div>
  </div>
      </div>
    </section>
  );
}

export default Skills;
