
import React from 'react';
import aboutImage from '../assets/image.png';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-dashboard-container reveal">
            <div className="about-dashboard-grid">
            
            <div className="about-image-pod">
              <h4>PROFILE</h4>
              <div className="image-wrapper">
                <img src={aboutImage} alt="Aditya Kumar in a professional setting" className="about-image" />
              </div>
            </div>

            <div className="about-info-hub">
              <h3>My Data Philosophy</h3>
              <p>
                I am a detail-oriented and motivated Data Analyst, currently in my final year of a B.Tech in Computer Science at <strong>NIT Delhi</strong>. My passion lies in untangling complex business problems by exploring datasets, identifying trends, and presenting findings in a compelling way.
              </p>
              
              <div className="info-divider"></div>

              <h4>Core Services</h4>
              <div className="what-i-do-widgets">
                <div className="service-widget">
                  <i className="fas fa-database"></i>
                  <h5>Data Preparation</h5>
                  <p>Cleaning & structuring raw data for analysis.</p>
                </div>
                <div className="service-widget">
                  <i className="fas fa-magnifying-glass-chart"></i>
                  <h5>Insight Discovery</h5>
                  <p>Uncovering patterns and trends to answer key questions.</p>
                </div>
                <div className="service-widget">
                  <i className="fas fa-chart-pie"></i>
                  <h5>Dashboarding</h5>
                  <p>Building interactive reports in Tableau & Power BI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;