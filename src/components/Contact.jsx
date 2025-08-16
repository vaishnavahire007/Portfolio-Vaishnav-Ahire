import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Vaishnav Ahire',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-description">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:vaishnavahire007@gmail.com" className="contact-value cursor-hover">
                  vaishnavahire007@gmail.com
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+918830217721" className="contact-value cursor-hover">
                  +91 8830217721
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Maharashtra, India</span>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/vaishnav-ahire-44837b280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link cursor-hover"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/vaishnavahire007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link cursor-hover"
              >
                GitHub
              </a>
              <a 
                href="https://medium.com/@vaishnavahire007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link cursor-hover"
              >
                Medium
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input cursor-hover"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input cursor-hover"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-input cursor-hover"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button cursor-hover">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="submit-message success">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="submit-message error">
                  Failed to send message. Please try again or contact me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Vaishnav Ahire. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;