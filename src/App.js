import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BubblesBackground from './components/BubblesBackground';
import Certificates from './components/Certificates';
import AllCertificates from './components/allCertificates';

function HomePage() {
  return (
    <>
      <BubblesBackground />
      <div className="content-wrapper">
        <Header />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-certificates" element={<AllCertificates />} />
      </Routes>
    </Router>
  );
}

export default App;
