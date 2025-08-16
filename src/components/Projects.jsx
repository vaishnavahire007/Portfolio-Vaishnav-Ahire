import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Decentralized Ledger for Medicine Authentication and Tracking",
      description: "A blockchain-based supply chain project for secure and transparent tracking of pharmaceutical drugs from manufacturer to end user.",
      tech: ["Blockchain", "Node.js", "Express", "MongoDB"],
      status: "In Development"
    },
    {
      title: "DeFi Trading Platform",
      description: "A decentralized trading platform built with React and Solidity, featuring automated market making and yield farming capabilities.",
      tech: ["React", "Solidity", "Web3.js", "Node.js"],
      status: "In Development"
    },
    {
      title: "Staysphere",
      description: "A hotel and rental management platform designed to simplify property bookings, manage customer records, and streamline payments.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      status: "Completed"
    },
    {
      title: "Candidate Management System",
      description: "A system to manage candidates' data, including registration, profile updates, and selection workflow, built with Node.js and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB"],
      status: "Completed"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-description">
            A showcase of my recent work and experiments
          </p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card cursor-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <button className="project-link cursor-hover">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;