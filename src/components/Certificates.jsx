import { useState } from 'react';
import './Certificates.css';
import AWSCERT from './AWSCERT.png';
import Azure from './azure.png';
import introtocyber from './introtocyber.png';
import Game from './gamedev.png';
import Askary from './askary.png';
import introtocloud from './Intro-to-Cloud.png';

const certificatesData = [
  { id: 1, title: 'AWS Cloud Practitioner', category: 'Cloud Certification', image: AWSCERT, Date: 'Feb 2025' },
  { id: 2, title: 'Microsoft Azure: Hands On Training: AZ-900 AZ-104 and AZ-305', category: 'Cloud Certification', image: Azure, Date: 'Feb 2022' },
  { id: 3, title: 'Introduction to Cybersecurity', category: 'Cybersecurity', image: introtocyber, Date: 'July 2023' },
  { id: 4, title: 'Game Development & Modeling', category: 'Game Development', image: Game, Date: 'June 2021' },
  { id: 5, title: 'Office Automation (Word, Excel, PowerPoint)', category: 'Office Automation', image: Askary, Date: 'August 2016' },
  { id: 6, title: 'Introduction to Cloud Computing', category: 'Cloud Certification', image: introtocloud, Date: 'Feb 2025' },
];

function Certificates() {
  const [showAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 3);

  return (
    <section id="certificates" className="certificates-section">
      <h2>My Certifications</h2>
      <p className="subtitle">“I have earned certifications to strengthen my knowledge and validate my skills. The key certifications are listed below.”</p>

      <div className="certificates-grid">
        {displayedCertificates.map((cert, index) => (
          <div
            className={`certificate-card ${index % 2 === 0 ? 'left' : 'right'}`}
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            style={{ cursor: 'pointer' }}
          >
            <div className="certificate-img">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-text">
              <h3>{cert.title}</h3>
              <div className="certificate-category">
                <span>{cert.category}</span>
                <span>{cert.Date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bi-btn-4 text-center text-uppercase">
        <a href="/all-certificates">
          <span>View More ➔</span>
        </a>
      </div>

     {selectedCert && (
  <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedCert.image} alt={selectedCert.title} />
      <h3>{selectedCert.title}</h3>
      <p>Category: {selectedCert.category}</p>
      <p>Date: {selectedCert.Date}</p>
      <p>This certification represents my achievement in {selectedCert.category}.</p>
      
      <button onClick={() => setSelectedCert(null)}>Close</button>
    </div>
  </div>
)}

    </section>
  );
}

export default Certificates;
