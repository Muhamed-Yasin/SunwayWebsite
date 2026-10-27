import React, { useState } from "react";

export const Navigation = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
    setIsMenuOpen(false);
  };

  // Custom smooth scroll function with navbar offset
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    
    if (target) {
      // Determine the navbar height based on screen size (80px desktop, 60px mobile)
      const navHeight = window.innerWidth <= 768 ? 60 : 80;
      
      // Calculate exactly where to scroll
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      // Keep the URL clean
      window.history.replaceState(null, "", window.location.pathname);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="container nav-container">
        
        <div className="nav-brand">
          <a href="/" onClick={handleLogoClick}>
            <img src="img/logo.png" alt="Sunway Energy Solutions" />
            <span className="brand-text">SUNWAY ENERGY SOLUTIONS</span>
          </a>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>
        
      </div>
    </nav>
  );
};