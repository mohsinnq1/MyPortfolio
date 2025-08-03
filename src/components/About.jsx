import { useState } from 'react';
import './Projects.css';
import TuneCrate from './TuneCrate.png';
import Home from './Home.png';
import explore from './explore.png';
import miniplayer from './miniplayer.png';
import expencetracker from './expencetracker.png';
import expencetracker1 from './expencepage1.png';
import musicplayer from './musicplayer.png';
import explorepage from './explorepage.png';
import homepage from './homepage.png';
import tuncratemobile from './TuneCrate Mobile App.mp4';
import expencetracker from './Expencetracker.mp4';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
 const [filter, setFilter] = useState('All');
  const projects = [
  {
    id: 1,
    title: 'Android App',
    category: 'Android',
    image: homepage,
    duration: 'June 2025 - July 2025',
      description: `TuneCrate is a Flutter-based music streaming mobile app that allows users 
    to manage and explore playlists with a responsive and intuitive UI. The Playlist Page 
    showcases user-created or auto-generated playlists with song metadata and smooth 
    navigation. Designed with efficient rendering using ListView.builder, it ensures 
    dynamic loading, seamless transitions, and optimized performance for various
    screen sizes.`,
    gallery: [homepage, musicplayer, explorepage],
    video: tuncratemobile,
      tools: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    category: 'UI/UX',
    image: TuneCrate,
    duration: 'May-25-2025 - May-28-2025',
    description: `Designed a modern and responsive user interface for a music streaming application using Figma.
    The design process included user research, wireframing, and prototyping. Focused on creating a 
    clean, intuitive layout with consistent visual hierarchy, smooth navigation, 
    and engaging user interactions to enhance usability and overall user experience. 
    Key screens include Home, Explore, and Miniplayer, each optimized 
    for both aesthetics and functionality.`,
  gallery: [Home, explore, miniplayer],
      tools: ['Figma', 'UX Research'],
  },
  {
    id: 3,
    title: 'Personal Expence Tracker',
    category: 'JAVA',
    image: expencetracker,
    duration: 'July-10-2025 - -July-17-2025',
    description: `This desktop application was developed using Java to help users effectively manage and track 
    their daily, weekly, and monthly expenses. It features a user-friendly GUI built with JavaFx, allowing users to:
. Add, update, and delete income and expense records.
. Categorize transactions (e.g., food, travel, bills, etc.).
. View summaries of total spending and income.
. Generate reports for financial analysis.
. Store data locally using file handling or a connected database (e.g., MySQL or SQLite).
The app emphasizes simplicity, ease of use, and visual clarity, making it ideal for individuals seeking better control of their personal finances.`,
  gallery: [expencetracker, expencetracker1],
    video: expencetracker,
      tools: ['Java', 'JavaFx', 'MySQL'],
   },
  ];

 const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextSlide = () => {
    if (!selectedProject) return;
    const totalSlides = selectedProject.gallery.length + (selectedProject.video ? 1 : 0);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    const totalSlides = selectedProject.gallery.length + (selectedProject.video ? 1 : 0);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
     <section id="project" className="skills-section">
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

    <div className="project-filters">
  {['All','Android', 'UI/UX', 'JAVA'].map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={filter === cat ? 'active' : ''}
    >
      <span>{cat} Projects</span>
    </button>
  ))}
</div>
      <div className="projects-grid">
        {projects
          .filter((project) => filter === 'All' || project.category === filter)
          .map((project, index) => (
            <div key={index} className="project-card" onClick={() => openModal(project)}>
              <img
              src={project.image}
  alt={project.title}
  className="project-thumbnail"
  loading="lazy"
/>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.duration}</p>
                <div className="project-tools" style={{ marginTop: '15px' }}>
                  {project.tools &&
                    project.tools.map((tool, idx) => (
                      <span key={idx} className="tool-button">
                        <span>{tool}</span>
                      </span>
                    ))}
                </div>
                <div className="project-description">{project.description}</div>
              </div>
            </div>
          ))}
      </div>
      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="carousel" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>

            <div className="carousel-content">
              {currentSlide < selectedProject.gallery.length ? (
                <img
                  src={selectedProject.gallery[currentSlide]}
                  alt="Project Slide"
                  className="carousel-image"
                />
              ) : selectedProject.video ? (
                <video className="carousel-image" controls>
                  <source src={selectedProject.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>

            {(selectedProject.gallery.length > 1 || selectedProject.video) && (
              <>
                <button className="nav-button" onClick={prevSlide}>
                  &#10094;
                </button>
                <button className="nav-button" onClick={nextSlide}>
                  &#10095;
                </button>
              </>
            )}

            <h3 style={{ color: "#b4b4b4;", marginBottom: '10px' }}>
              {selectedProject.title} -{' '}
            </h3>
<span style={{ color: "#b4b4b4", fontWeight: "normal" }}>
                {selectedProject.duration}
              </span>
            <div className="project-tools" style={{ marginTop: '15px' }}>
              {selectedProject.tools?.map((tool, idx) => (
                <span key={idx} className="tool-button">
                  <span>{tool}</span>
                </span>
              ))}
            </div>

           <p className="project-description full">{selectedProject.description}</p>

          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Projects;
