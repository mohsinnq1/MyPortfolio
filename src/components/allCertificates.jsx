import './allCertificates.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AWSCloud from './awscloud.png';
import azurecloud from './azurecloud.png';
import introtocyber from './intro-to-cyber.png';
import Game from './gamedev.png';
import Askary from './officeauto.png';
import intrtocloud from './intro-tocloud.png';

const certificatesData = [
  { id: 1, title: 'AWS Cloud Practitioner', category: 'Cloud Certification', image: AWSCloud, Date: 'Feb 2025', description: 'This certification validates AWS Cloud knowledge and skills.' },
  { id: 2, title: 'Microsoft Azure: AZ-900 AZ-104 and AZ-305', category: 'Cloud Certification', image: azurecloud, Date: 'Feb 2022', description: 'Comprehensive training on Azure services, management, and architecture.' },
  { id: 3, title: 'Introduction to Cybersecurity', category: 'Cybersecurity', image: introtocyber, Date: 'July 2023', description: 'Covers basics of cybersecurity principles and best practices.' },
  { id: 4, title: 'Game Development & Modeling', category: 'Game Development', image: Game, Date: 'June 2021', description: 'Focus on game development concepts, design, and 3D modeling.' },
  { id: 5, title: 'Office Automation (Word, Excel, PowerPoint)', category: 'Office Automation', image: Askary, Date: 'August 2016', description: 'Training on MS Office tools for professional tasks.' },
  { id: 6, title: 'Introduction to Cloud Computing', category: 'Cloud Certification', image: intrtocloud, Date: 'Feb 2025', description: 'Fundamentals of Cloud Computing and its applications.' },
];

function AllCertificates() {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="allcertificates" className="allcertificates-section">
      <div className="allcertificates-header">
        <FaArrowLeft className="left-arrow" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        <h2>Certificates</h2>
      </div>
      <p className="subtitle">A collection of my achievements</p>

      <div className="allcertificates-grid">
        {certificatesData.map((cert) => (
          <div className="allcertificates-card" key={cert.id} onClick={() => setSelectedCert(cert)}>
            <div className="allcertificates-img">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="allcertificates-text">
              <h3>{cert.title}</h3>
              <div className="allcertificates-category">
                <span>{cert.category}</span>
                <span>{cert.Date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <h3>{selectedCert.title}</h3>
            <p><strong>Category:</strong> {selectedCert.category}</p>
            <p><strong>Date:</strong> {selectedCert.Date}</p>
            <p>{selectedCert.description}</p>
            <button onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AllCertificates;
