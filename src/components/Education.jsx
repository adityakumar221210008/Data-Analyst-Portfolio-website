// src/components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid reveal">
          <div className="education-item">
            <i className="fas fa-graduation-cap edu-icon"></i>
            <h3>B.Tech in Computer Science & Engineering</h3>
            <p className="education-date">2022 – 2026</p>
            <p>National Institute of Technology Delhi</p>
          </div>
          <div className="education-item">
            <i className="fas fa-school edu-icon"></i>
            <h3>High School Certificate</h3>
            <p className="education-date">2020 – 2022</p>
            <p>GMSSS 33 Chandigarh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;