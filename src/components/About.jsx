import './About.css'
import { useEffect, useState, useMemo } from 'react';
import BluebgFormal from './BluebgFormal.jpg';

function About() {
  const roles = useMemo(() => [ "Aspiring Junior Cyber Security Analyst","Aspiring Defensive Security / Blue Team Member","Aspiring Cloud Security (AWS, Azure)","Aspiring Identity & Access Management (IAM)","Freelance UI/UX Designer","Freelance Game Developer", "Freelance Android App Developer", "Programmer"], []);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
useEffect(() => {
  const handleResize = () => {
    console.log("Window width:", window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Log immediately on mount

  return () => window.removeEventListener('resize', handleResize);
}, []);
  useEffect(() => {
    
    const current = roles[index % roles.length];
    const interval = setInterval(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
      } else {
        setText(current.substring(0, text.length + 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, 150);

    return () => clearInterval(interval);
    
  }, [text, isDeleting, index, roles]);

  return (
   <section id="about" className="about-section">

  {/* ✅ Desktop View */}
  <div className="about-desktop">
    <div className="about-content">
      <h2>Hi, I am<br />Mohsin Nawaz</h2>
      <h3>
        I am a <span className="typed-text">{text}</span>
        <span className="cursor">|</span>
      </h3>
      <h4>
         I am a motivated and versatile individual, always <br />
  eager to take on new challenges. With a strong interest in <br />
  Cybersecurity—particularly Defensive Security, Blue Team <br />
  operations, Cloud Security, and IAM—I am working towards <br />
  building a career in this field. At the same time, I bring <br />
  hands-on experience in Game Development, Mobile App <br />
  Development, and UI/UX Design, which enhance my technical <br />
  and creative problem-solving skills. With a positive <br/>
  attitude and a growth mindset, I am committed to <br />
   learning continuously, contributing effectively, and <br />
  achieving impactful outcomes in <br />
  every project I take on.
      </h4>
      <div className="about-buttons">
        <a href="https://drive.google.com/file/d/117e7e03S8dzR-J-Y4_5OaUm9MwzNb-b0/view?usp=sharing" target="_blank" rel="noreferrer">
          <button><span>Resume</span></button>
        </a>
        <a href="https://github.com/mohsinnq1" target="_blank" rel="noreferrer">
          <button><span>GitHub Profile</span></button>
        </a>
      </div>
    </div>

    <div className="about-image-wrapper">
      <div className="about-image-circle">
        <img src={BluebgFormal} alt="Mohsin Nawaz" />
        <div className="about-image-tail"></div>
      </div>
    </div>
  </div>

  {/* ✅ Mobile View */}
  <div className="about-mobile">
    <div className="about-image-wrapper mobile">
    <div className="water-circle"> </div>
      <div className="about-image-circle">
      <img src={BluebgFormal} alt="Mohsin Nawaz" />
    </div>
    </div>
      <div class="about-mobile-text">
      <h2>Hi, I am</h2>
       <h2 class="name-line">Mohsin Nawaz</h2>
      <h3>
        I am a <span className="typed-text">{text}</span>
        <span className="cursor">|</span>
      </h3>
      </div>
      <h4>
        I am a motivated and versatile individual, always <br />
  eager to take on new challenges. With a strong interest in <br />
  Cybersecurity—particularly Defensive Security, Blue Team <br />
  operations, Cloud Security, and IAM—I am working towards <br />
  building a career in this field. At the same time, I bring <br />
  hands-on experience in Game Development, Mobile App <br />
  Development, and UI/UX Design, which enhance my technical <br />
  and creative problem-solving skills. With a positive <br/>
  attitude and a growth mindset, I am committed to <br />
   learning continuously, contributing effectively, and <br />
  achieving impactful outcomes in <br />
  every project I take on.
      </h4>
      <div className="about-buttons">
        <a href="https://drive.google.com/file/d/117e7e03S8dzR-J-Y4_5OaUm9MwzNb-b0/view?usp=sharing" target="_blank" rel="noreferrer">
          <button><span>Resume</span></button>
        </a>
        <a href="https://github.com/mohsinnq1" target="_blank" rel="noreferrer">
          <button><span>GitHub Profile</span></button>
        </a>
      </div>
    </div>
</section>

  );
}

export default About;
