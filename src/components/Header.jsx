// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('portfolio-theme') || 'professional');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const headerEl = document.getElementById("header");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      headerEl.classList.toggle("header-scrolled", window.scrollY > 50);
      let currentSectionId = "";
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - headerEl.offsetHeight - 20) {
          currentSectionId = section.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute('href') === `#${currentSectionId}`);
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("no-scroll", !menuActive);
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    setThemeMenu(false);
  };
  
  const themes = [
      { name: 'default', title: 'Default Green', colors: ['#11201C', '#1A2D27', '#04d07f'] },
      { name: 'synthwave', title: 'Synthwave', colors: ['#161122', '#1f162e', '#ff00ff'] },
      { name: 'forest', title: 'Forest', colors: ['#2d3a3a', '#3c4d4d', '#a3b899'] },
      { name: 'dusk', title: 'Midnight Dusk', colors: ['#191924', '#222230', '#ff9a3c'] },
      { name: 'professional', title: 'Professional', colors: ['#f8f9fa', '#ffffff', '#007bff'] },
      { name: 'mint', title: 'Minty Fresh', colors: ['#ffffff', '#f1f5f9', '#10b981'] }
  ];
  return (
    <header id="header">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container">
          <a href="#home" className="nav-logo" aria-label="Aditya Kumar Home">
            <span>Aditya</span>Kumar
          </a>
          <ul className={`nav-menu ${menuActive ? 'active' : ''}`} role="menubar">
            <li className="nav-item" role="none"><a href="#about" className="nav-link" role="menuitem" onClick={() => setMenuActive(false)}>About</a></li>
            <li className="nav-item" role="none"><a href="#projects" className="nav-link" role="menuitem" onClick={() => setMenuActive(false)}>Projects</a></li>
            <li className="nav-item" role="none"><a href="#skills" className="nav-link" role="menuitem" onClick={() => setMenuActive(false)}>Skills</a></li>
            <li className="nav-item" role="none"><a href="#experience" className="nav-link" role="menuitem" onClick={() => setMenuActive(false)}>Experience</a></li>
            <li className="nav-item" role="none"><a href="#contact" className="nav-link" role="menuitem" onClick={() => setMenuActive(false)}>Contact</a></li>
          </ul>
          <div className="header-actions">
            <div className="theme-dropdown">
              <button id="theme-toggle-btn" aria-label="Choose theme" onClick={() => setThemeMenu(!themeMenu)}>
                <i className="fas fa-palette"></i>
              </button>
              <div id="theme-menu" className={themeMenu ? 'active' : ''} role="menu">
             
                {themes.map(theme => (
                <button
                    key={theme.name}
                    className={`theme-option ${currentTheme === theme.name ? 'active' : ''}`}
                    title={theme.title}
                    onClick={() => handleThemeChange(theme.name)}
                    style={{
                        '--theme-bg': theme.colors[0],
                        '--theme-accent': theme.colors[2]
                    }}
                />
            ))}
              </div>
            </div>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={menuActive}>
              <span className="bar"></span><span className="bar"></span><span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;