// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container reveal">
            <div className="skill-card-flipper"><div className="skill-card"><div className="skill-card-front"><h3><i className="fas fa-code"></i> Languages & Databases</h3><ul><li>Python (Pandas, NumPy)</li><li>SQL (MySQL, PostgreSQL)</li><li>Excel (Advanced Functions)</li></ul></div><div className="skill-card-back"><p>"The art of programming is the skill of controlling complexity." <strong>- Marijn Haverbe</strong></p></div></div></div>
            <div className="skill-card-flipper"><div className="skill-card"><div className="skill-card-front"><h3><i className="fas fa-chart-bar"></i> Data Visualization</h3><ul><li>Tableau</li><li>Power BI</li><li>Seaborn & Matplotlib</li></ul></div><div className="skill-card-back"><p>"The greatest value of a picture is when it forces us to notice what we never expected to see." <strong>- John Tukey</strong></p></div></div></div>
            <div className="skill-card-flipper"><div className="skill-card"><div className="skill-card-front"><h3><i className="fas fa-tools"></i> Tools & Technologies</h3><ul><li>Jupyter Notebook</li><li>Git & GitHub</li><li>REST APIs</li></ul></div><div className="skill-card-back"><p>"Technology is best when it brings people together." <strong>- Matt Mullenweg</strong></p></div></div></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;