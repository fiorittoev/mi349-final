import { useState, useEffect, useRef } from 'react';
import '../styles/contactcard.css';

function ContactCard({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thanks for your message! (This is a demo)");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);

    // In a real app, you would handle form submission here:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     alert("Message sent successfully!");
    //     setFormData({ name: '', email: '', message: '' });
    //   }
    // } catch (error) {
    //   alert("Failed to send message. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div
      className={`contact-card-container ${isVisible ? 'visible' : ''} ${isHovered ? 'expanded' : ''}`}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="contact-background-3"></div>
      <div className="contact-background-2"></div>
      <div className="contact-background-1">
        <div className="contact-card-content">
          <h2 className="contact-card-title">{children}</h2>

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
                  className="form-input"
                  disabled={isSubmitting}
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
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-input form-textarea"
                  rows="4"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;