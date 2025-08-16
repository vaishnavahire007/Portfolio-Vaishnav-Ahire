import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I’m Vaishnav Ahire, a passionate Full Stack Developer skilled in building 
                dynamic, responsive, and scalable web applications using technologies like 
                React, Node.js, Express, and MongoDB. I enjoy turning ideas into functional, 
                user-friendly solutions and constantly explore emerging technologies like 
                Blockchain to stay ahead in the tech world.
                With a strong foundation in backend development, I aim to create applications 
                that are not only technically sound but also provide an excellent user 
                experience.

              </p>
              <p>
                When I’m not coding, I’m learning new skills, contributing to projects, 
                and pushing myself to grow as a developer.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-image">
              <img 
                src="/my pic.jpg" 
                alt="Vaishnav Ahire" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;