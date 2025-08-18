// src/components/Certifications.js
import React from 'react';

const Certifications = () => {
  return (
    <section id="certs">
      <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certs-grid reveal">
              <div className="cert-card">
                  <i className="fas fa-award cert-icon"></i>
                  <div>
                      <h4>Google Data Analytics Professional Certificate</h4>
                      <p>Coursera — Completed a comprehensive program covering the entire data analysis lifecycle.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Certifications;