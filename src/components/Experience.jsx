import './experience.css';
import blossom from './blossom.jpg';
import youngdev from './youngdev.jpg';

function Experience() {
  return (
    <section id="experience" section className="experience-center-section">
      <h2>EXPERIENCE</h2>
      <h3>“My professional journey reflects continuous learning, hands-on experience, and growth. Here are the highlights.”</h3>

      <div className="experience-center-wrapper">
        <div className="experience-center-line"></div>

        <div className="experience-center-item down">
          <div className="experience-center-dot">
            <img src={blossom} alt="Game Development Internship" />
          </div>
          <div className="experience-center-content">
                <div className="arrow-left"></div>
            <div className="experience-content-header">
              <div className="experience-content-image">
                <img src={blossom} alt="Matric" />
              </div>
              <div className="experience-content-info">
                <span className="degree">Blossom Heaven Ltd</span>
                <h3>Game Development Intern</h3>
                <span className="date">Duration: 6 Months</span>
              </div>
            </div>
            <ul className="desc">
  <li>Designed engaging game levels and interactive puzzles for the <strong>Chronicle of Celesti</strong> project.</li>
  <li>Developed gameplay mechanics, puzzle logic, and environment interactions using <strong>Unity Engine</strong> and <strong>C# scripting</strong>.</li>
  <li>Collaborated with designers and developers to balance game difficulty and enhance player experience.</li>
  <li>Contributed to creative brainstorming sessions for storyline progression and level flow.</li>
  <li>Participated in gameplay testing, bug fixing, and feature improvement.</li>
</ul>

          </div>
        </div>

        <div className="experience-center-item up">
          <div className="experience-center-dot">
            <img src={youngdev} alt="Cybersecurity Internship" />
          </div>
          <div className="experience-center-content">
                <div className="arrow-right"></div>
            <div className="experience-content-header">
              <div className="experience-content-image">
                <img src={youngdev} alt="Matric" />
              </div>
              <div className="experience-content-info">
                <span className="degree">Youngdev Intern</span>
                <h3>Cybersecurity Intern(Remote)</h3>
                <span className="date">Duration: 1 Months</span>
              </div>
            </div>
             <ul className="desc">
           <li> Gained hands-on experience with basic cybersecurity concepts, threat analysis, and network security principles.</li>

<li>Worked on real-world scenarios like identifying vulnerabilities and analyzing network traffic using tools like Wireshark and Nmap.</li>

<li>Learned practical aspects of security protocols, event monitoring, and basic incident handling.</li>

<li>Developed an understanding of Active Directory, Windows Server security, and reconnaissance techniques.</li>

<li>Collaborated remotely with a mentor and peers on assigned security tasks and learning modules.</li>
</ul>
          </div>
        </div>

      </div>
      {/*Mobile*/}
      <div className="experience-mobile">
        <div className="experience-center-first">
          <div className="experience-center-content">
            <div className="experience-content-header">
              <div className="experience-content-image">
                <img src={blossom} alt="Matric" />
              </div>
              <div className="experience-content-info">
                <span className="degree">Blossom Heaven Ltd</span>
                <h3>Game Development Intern</h3>
                <span className="date">Duration: 6 Months</span>
              </div>
            </div>
            <ul className="desc">
  <li>Designed engaging game levels and interactive puzzles for the <strong>Chronicle of Celesti</strong> project.</li>
  <li>Developed gameplay mechanics, puzzle logic, and environment interactions using <strong>Unity Engine</strong> and <strong>C# scripting</strong>.</li>
  <li>Collaborated with designers and developers to balance game difficulty and enhance player experience.</li>
  <li>Contributed to creative brainstorming sessions for storyline progression and level flow.</li>
  <li>Participated in gameplay testing, bug fixing, and feature improvement.</li>
</ul>

          </div>
        </div>

        <div className="experience-center-second">
          <div className="experience-center-content">
            <div className="experience-content-header">
              <div className="experience-content-image">
                <img src={youngdev} alt="Matric" />
              </div>
              <div className="experience-content-info">
                <span className="degree">Youngdev Intern</span>
                <h3>Cybersecurity Intern(Remote)</h3>
                <span className="date">Duration: 1 Months</span>
              </div>
            </div>
             <ul className="desc">
           <li> Gained hands-on experience with basic cybersecurity concepts, threat analysis, and network security principles.</li>

<li>Worked on real-world scenarios like identifying vulnerabilities and analyzing network traffic using tools like Wireshark and Nmap.</li>

<li>Learned practical aspects of security protocols, event monitoring, and basic incident handling.</li>

<li>Developed an understanding of Active Directory, Windows Server security, and reconnaissance techniques.</li>

<li>Collaborated remotely with a mentor and peers on assigned security tasks and learning modules.</li>
</ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
