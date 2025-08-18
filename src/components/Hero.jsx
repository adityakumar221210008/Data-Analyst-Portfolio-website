// src/components/Hero.jsx

import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/profile1.png';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    if (window.Typed) {
      const options = {
        strings: ['Data Detective', 'Insight Architect', 'Dashboard Wizard', 'Data Analyst'],
        typeSpeed: 50, backSpeed: 30, backDelay: 1500, startDelay: 500, loop: true
      };
      const typed = new window.Typed(typedElement.current, options);
      return () => { typed.destroy(); };
    }
  }, []);

  // Parallax effect for the icons on mouse move
  useEffect(() => {
    const heroSection = document.getElementById('home');
    const parallaxShapes = document.querySelectorAll('.shape-parallax');
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = clientX - centerX;
      const moveY = clientY - centerY;

      parallaxShapes.forEach(shape => {
        const depth = shape.dataset.depth || 0.5;
        const offsetX = (moveX * depth) / 25;
        const offsetY = (moveY * depth) / 25;
        shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    return () => heroSection.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="shapes-container">
        <div className="shape-parallax" data-depth="0.3" style={{ left: '15%', top: '20%' }}><div className="shape"><i className="fas fa-chart-bar"></i></div></div>
        <div className="shape-parallax" data-depth="0.4" style={{ left: '10%', top: '75%' }}><div className="shape"><i className="fas fa-database"></i></div></div>
        <div className="shape-parallax" data-depth="0.2" style={{ left: '85%', top: '15%' }}><div className="shape"><i className="fas fa-chart-pie"></i></div></div>
        <div className="shape-parallax" data-depth="0.6" style={{ left: '90%', top: '60%' }}><div className="shape"><i className="fas fa-magnifying-glass-chart"></i></div></div>
        <div className="shape-parallax" data-depth="0.5" style={{ left: '5%', top: '40%' }}><div className="shape"><i className="fas fa-code"></i></div></div>
        <div className="shape-parallax" data-depth="0.2" style={{ left: '80%', top: '90%' }}><div className="shape"><i className="fas fa-arrow-trend-up"></i></div></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-text">
          <p className="hero-intro-text">Hello, I'm Aditya Kumar</p>
          <h1>I am a <span ref={typedElement} className="typed-text"></span></h1>

    
          <p className="hero-bio">
            I transform complex data into clear, actionable insights. With a strong foundation in Python, SQL, and data visualization tools, I build dashboards and analyses that drive business decisions and uncover hidden opportunities.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://docs.google.com/document/d/1wEVmgP4x95SllUunn_utlRXTKWayLrDs/edit?usp=drive_link&ouid=101025133761734949696&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</a>
          </div>
          <div className="social-icons reveal" aria-label="Social Links" style={{ marginTop: '25px' }}>
            <a href="https://www.linkedin.com/in/aditya-kumar-a7162723a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/adityakumar221210008" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aditya752907@gmail.com" target="_blank" aria-label="Email"><i className="fa-solid fa-envelope" ></i></a>
          </div>
          {/* ======================================= */}

        </div>
        
        <div className="hero-image-container reveal">
          <div className="hero-image-background-gradient"></div>
          <img src={profileImage} alt="Professional portrait of Aditya Kumar" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;