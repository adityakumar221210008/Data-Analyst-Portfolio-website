// src/components/Projects.jsx

import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <article className="project-card reveal">
              {/* This link is stable and working */}
              <img className="project-thumb" src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1600&auto=format&fit=crop" alt="Spotify logo on a phone screen representing data analysis" />
              <div className="project-content">
                  <h3>Spotify Data Analysis & Dashboard</h3>
                  <p className="project-description">Collected and cleaned 10K+ Spotify track records for exploratory analysis. Wrote complex SQL queries to uncover genre trends and artist performance, then designed a Tableau dashboard to visualize top tracks, genre evolution, and user engagement metrics.</p>
                  <div className="tech-stack">
                      <span className="tech-tag">SQL</span>
                      <span className="tech-tag">Tableau</span>
                      <span className="tech-tag">Python</span>
                  </div>
                  <div className="project-links"><a href="https://github.com/adityakumar221210008/Spotify-Analysis-Dashboard" className="btn btn-secondary btn-small">View Project</a></div>
              </div>
          </article>
          <article className="project-card reveal">
              {/* This link is stable and working */}
              <img className="project-thumb" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" alt="Business professionals analyzing a chart related to customer churn" />
              <div className="project-content">
                  <h3>Customer Churn Prediction</h3>
                  <p className="project-description">Developed a classification model to predict telecom customer churn with 82% accuracy. Performed EDA and feature importance analysis to identify key churn drivers like tenure and support calls, suggesting targeted retention strategies.</p>
                  <div className="tech-stack">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">Scikit-learn</span>
                  </div>
                  <div className="project-links"><a href="#projects" className="btn btn-secondary btn-small">View Project</a></div>
              </div>
          </article>
          <article className="project-card reveal">
              {/* ======================================================================= */}
              {/* ======  FIX: This is a new, different, and confirmed working URL.  ====== */}
              {/* ======================================================================= */}
              <img className="project-thumb" src="https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cityscape with haze representing a study on air pollution" />
              <div className="project-content">
                  <h3>Global Air Quality & Pollution Trends</h3>
                  <p className="project-description">Analyzed WHO and OpenAQ datasets (10M+ records) to track air quality trends. Applied time-series analysis to study seasonal spikes and built an interactive Power BI dashboard highlighting city-wise AQI, pollutant distribution, and health risk factors.</p>
                  <div className="tech-stack">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">Power BI</span>
                  </div>
                  <div className="project-links"><a href="#projects" className="btn btn-secondary btn-small">View Project</a></div>
              </div>
          </article>
        </div>
      </div>
    </section>
  );
};


export default Projects;
