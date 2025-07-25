import './Contact.css';
import { Link } from 'react-scroll';
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.target;
    const data = {
      email: form.email.value,
      name: form.name.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/movljloj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error! Try again.');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <h3>Feel free to reach out for collaborations or just a friendly chat.</h3>

        <div className="contact-form">
          <h4>Email Me</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="input-box">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-box">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="input-box">
              <textarea rows="4" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send</button>
            <p>{status}</p>
          </form>
        </div>
      </section>

      <footer className="contact-footer">
  <div className="footer-wave">
    <div className="wave-container">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>

    <h3>Mohsin Nawaz</h3>
    <nav>
      <ul className="footer-nav-links">
        <li><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} offset={-80} duration={500}>Skills</Link></li>
        <li><Link to="education" smooth={true} offset={-80} duration={500}>Education</Link></li>
        <li><Link to="certificates" smooth={true} offset={-80} duration={500}>Certificate</Link></li>
        <li><Link to="experience" smooth={true} offset={-80} duration={500}>Experience</Link></li>
        <li><Link to="project" smooth={true} offset={-80} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} offset={-80} duration={500}>Contact</Link></li>
      </ul>
    </nav>

    <div className="footer-social">
      <a href="https://www.linkedin.com/in/mohsin-nawaz-858b462bb" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>

    <p>© 2024 Mohsin Nawaz. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default Contact;
