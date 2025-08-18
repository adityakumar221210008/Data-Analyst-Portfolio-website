// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline reveal">
          <div className="experience-item">
            <div className="experience-content">
              <h3>Full Stack Web Development Intern</h3>
              <p className="experience-company-date">SKILL HIGH • April 2025 – July 2025 (Upcoming)</p>
              <ul>
                <li>Will contribute to features across the MERN stack, participating in an Agile development environment.</li>
                <li>Tasked with building internal analytics views to track KPIs using REST APIs.</li>
                <li>Expected to assist with deployments and develop clear documentation for project handover.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;