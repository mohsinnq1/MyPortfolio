import './About.css';
import { useEffect, useState, useMemo } from 'react';
import BluebgFormal from './BluebgFormal.jpg';

function About() {
  const roles = useMemo(() => ["UI/UX Designer", "Game Developer", "Android App Developer", "Programmer"], []);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      <div className="about-content">
        <h2>Hi, I am<br />Mohsin Nawaz</h2>
        <h3>
          I am a <span className="typed-text">{text}</span>
          <span className="cursor">|</span>
        </h3>
        <h4>
         I am a motivated and versatile individual, always<br />
eager to take on new challenges. With a passion for<br />
Game development,Mobile App development,<br /> UI/UX design, and Cybersecurity,
I am dedicated to<br /> delivering high-quality results.
With a positive attitude<br /> and a growth mindset,
I am ready to contribute my skills,<br /> learn continuously,
and achieve impactful outcomes in<br /> every project I take on.
        </h4>
        <div className="about-buttons">
          <a href="https://drive.google.com/file/d/1apy8KMqqOhUJed1cnYc_wu1notQE7MrP/view?usp=sharing" target="_blank" rel="noreferrer">
            <button>
  <span>Resume</span>
</button>
          </a>
          <a href="https://github.com/mohsinnq1" target="_blank" rel="noreferrer">
            <button>
  <span>GitHub Profile</span>
</button>
          </a>
        </div>
      </div>

      <div className="about-image-wrapper">
  <div className="about-image-circle">
    <img src={BluebgFormal} alt="My Avatar" />
    <div className="about-image-tail"></div>
  </div>
</div>

    </section>
  );
}

export default About;
