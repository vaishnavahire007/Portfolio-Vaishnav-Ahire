import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Vaishnav</span>
              <span className="title-line">Ahire</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Web3 Developer & Blockchain Explorer
            </p>
            <p className="hero-description">
              Crafting modern web applications and exploring the future of decentralized technology.
            </p>
          </div>
          
          <div className="hero-actions">
            <button className="cta-button cursor-hover" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a 
              href="https://drive.google.com/file/d/11W8YeQld1FB1h--r51b46qNMhVMfBs_S/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-link cursor-hover"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;