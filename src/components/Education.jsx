import './education.css';
import MATRICBOARD from './MATRICBOARD.jpg';
import Hydlogo from './Hydlogo.jpg';
import iqralogo from './iqralogo.png';

function Education() {
  return (
    <section id="education" className="education-center-section">
      <h2>EDUCATION</h2>
      <h3>“My education has been a journey of learning, growth, and skill development. Below are the key details.”</h3>

      <div className="education-center-wrapper">
        <div className="education-center-line"></div>
        {/* Matriculation */}
        <div className="education-center-item down" style={{ float: 'left' }}>
          <div className="education-center-dot">
            <img src={MATRICBOARD} alt="Matriculation" />
          </div>
          <div className="education-center-content">
            <div className="arrow-left"></div>
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={MATRICBOARD} alt="Matriculation Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">Board of Secondary Educaction Karachi</span>
                <h3>Science Group</h3>
                <span className="date">2014 - 2016</span>
                <span className="grade">Grade: B</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Matriculation with a focus on Science subjects: Physics, Chemistry, Biology, and Mathematics.</li>
              <li>Built foundational knowledge in scientific principles, logical thinking, and problem-solving skills.</li>
              <li>Developed an early interest in computing and technology during academic coursework.</li>
              <li>Actively participated in academic activities, experiments, and science-related events.</li>
            </ul>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-center-item up" style={{ float: 'none', display: 'inline-block' }}>
          <div className="education-center-dot">
            <img src={Hydlogo} alt="Intermediate" />
          </div>
          <div className="education-center-content">
             <div className="arrow-left"></div>
            <div className="arrow-right"></div>
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={Hydlogo} alt="Intermediate Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">Board of Intermediate & Secondary Educaction Hyderabad</span>
                <h3>Pre-Engineering</h3>
                <span className="date">2016 - 2018</span>
                <span className="grade">GRADE: C</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Intermediate education with a focus on Pre-Engineering subjects: Mathematics, Physics, and Chemistry.</li>
              <li>Built a strong foundation in analytical reasoning, logical problem-solving, and technical concepts.</li>
              <li>Developed interest in engineering principles, which guided my future academic and career choices.</li>
              <li>Engaged in academic projects and group assignments to enhance teamwork and technical skills.</li>
            </ul>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="education-center-item down" style={{ float: 'right' }}>
          <div className="education-center-dot">
            <img src={iqralogo} alt="Bachelor" />
          </div>
          <div className="education-center-content">
            <div className="arrow-left"></div>
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={iqralogo} alt="Iqra University Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">IQRA University</span>
                <h3>Computer Science</h3>
                <span className="date">2019 - 2024</span>
                <span className="grade">CGPA: 2.82</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Bachelor of Science in Computer Science from Iqra University.</li>
              <li>Studied core subjects including Programming, Data Structures, Algorithms, Database Systems, and Software Engineering.</li>
              <li>Worked on projects covering Web Development, Mobile App Development, Game Development, and Networking.</li>
              <li>Developed skills in problem-solving, project management, and collaborative teamwork.</li>
              <li>Actively participated in academic projects, seminars, and technology-related competitions.</li>
            </ul>
          </div>
        </div>

      </div>
      {/*Mobile*/}
      <div className="education-mobile">
        {/* Matriculation */}
        <div className="education-center-first" style={{width: '100%'}}>
          <div className="education-center-content-first">
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={MATRICBOARD} alt="Matriculation Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">Board of Secondary Educaction Karachi</span>
                <h3>Science Group</h3>
                <span className="date">2014 - 2016</span>
                <span className="grade">Grade: B</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Matriculation with a focus on Science subjects: Physics, Chemistry, Biology, and Mathematics.</li>
              <li>Built foundational knowledge in scientific principles, logical thinking, and problem-solving skills.</li>
              <li>Developed an early interest in computing and technology during academic coursework.</li>
              <li>Actively participated in academic activities, experiments, and science-related events.</li>
            </ul>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-center-second">
          <div className="education-center-content-second">
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={Hydlogo} alt="Intermediate Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">Board of Intermediate & Secondary Educaction Hyderabad</span>
                <h3>Pre-Engineering</h3>
                <span className="date">2016 - 2018</span>
                <span className="grade">GRADE: C</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Intermediate education with a focus on Pre-Engineering subjects: Mathematics, Physics, and Chemistry.</li>
              <li>Built a strong foundation in analytical reasoning, logical problem-solving, and technical concepts.</li>
              <li>Developed interest in engineering principles, which guided my future academic and career choices.</li>
              <li>Engaged in academic projects and group assignments to enhance teamwork and technical skills.</li>
            </ul>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="education-center-third">
          <div className="education-center-content-third">
            <div className="education-content-header">
              <div className="education-content-image">
                <img src={iqralogo} alt="Iqra University Logo" />
              </div>
              <div className="education-content-info">
                <span className="degree">IQRA University</span>
                <h3>Computer Science</h3>
                <span className="date">2019 - 2024</span>
                <span className="grade">CGPA: 2.82</span>
              </div>
            </div>
            <ul className="desc">
              <li>Completed Bachelor of Science in Computer Science from Iqra University.</li>
              <li>Studied core subjects including Programming, Data Structures, Algorithms, Database Systems, and Software Engineering.</li>
              <li>Worked on projects covering Web Development, Mobile App Development, Game Development, and Networking.</li>
              <li>Developed skills in problem-solving, project management, and collaborative teamwork.</li>
              <li>Actively participated in academic projects, seminars, and technology-related competitions.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
