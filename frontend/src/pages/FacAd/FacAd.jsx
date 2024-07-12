import React from 'react';
import './FacAd.css'; 
import facAdimg from '../../assets/bg_removed_amit_sethi.png'; 

const FacultyAdvisor = () => {
  return (
    <div className="faculty-home">
      <div className="faculty-box">
        <h1 className="faculty-box-heading animate-faculty-heading">Know the Faculty Advisor</h1>
        <p className="faculty-description animate-faculty-description">
          Al Community at IITB is advised by Prof. Amit Sethi. He's a professor at the Electrical Engineering dept. of IIT-Bombay and an adjunct faculty at the Dept. of Pathology at the University of Illinois, Chicago (UIC). His research interests lie in Deep learning, machine learning, image processing, computer vision, and medical image analysis. You can get to know more about him by visiting his <a href="https://www.ee.iitb.ac.in/~asethi/" className="faculty-link animate-faculty-link">webpage</a>. The work Al Community does is all made possible by a group of dedicated individuals enthusiastic about research and innovation in the field.
        </p>
        <ul className="faculty-resume-list animate-faculty-resume-list">
          <li>Interests: Deep learning, machine learning, image processing, computer vision, medical image analysis.</li>
          <li>Professor, Dept. of EE, IIT Bombay</li>
          <li>Adjunct faculty, Dept. of Pathology, UIC</li>
          <li>PhD in ECE, MS in GE, UIUC; BTech in EE, IIT Delhi</li>
          
        </ul>
      </div>
      <div className="faculty-image-container">
        <img src={facAdimg} alt="Prof. Amit Sethi" className="faculty-prof-image animate-faculty-image" />
      </div>
    </div>
  );
};

export default FacultyAdvisor;
