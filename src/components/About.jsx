import './About.css'
import { useEffect, useState, useMemo } from 'react';
import BluebgFormal from './BluebgFormal.jpg';

function About() {
  const roles = useMemo(() => ["UI/UX Designer", "Game Developer", "Android App Developer", "Programmer"], []);
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
        I am a motivated and versatile individual, always<br />
        eager to take on new challenges. With a passion for<br />
        Game development, Mobile App development,<br />
        UI/UX design, and Cybersecurity, I am dedicated to<br />
        delivering high-quality results.
        With a positive attitude<br /> and a growth mindset,
        I am ready to contribute my skills,<br /> learn continuously,
        and achieve impactful outcomes in<br /> every project I take on.
      </h4>
      <div className="about-buttons">
        <a href="https://drive.google.com/file/d/1LaEug4HrgltDA32HP0LLnvRDZi64lalz/view?usp=sharing" target="_blank" rel="noreferrer">
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
        I am a motivated and versatile individual,<br />
        always eager to take on new challenges.<br />
         With a passion for Game development,<br />
         Mobile App development, UI/UX design,<br />
        Cybersecurity, I am dedicated to delivering<br /> 
        high-quality results. With apositive<br /> 
        positive attitude and a growth mindset, I<br /> 
        am ready to learn continuously, contribute<br />my skills, and achieve impactful outcomes <br />in every project I take on.
      </h4>
      <div className="about-buttons">
        <a href="https://drive.google.com/file/d/1LaEug4HrgltDA32HP0LLnvRDZi64lalz/view?usp=sharing" target="_blank" rel="noreferrer">
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
