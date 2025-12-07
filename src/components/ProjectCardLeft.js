import { useState, useEffect, useRef } from 'react';

function ProjectCardLeft({ children, description, image, link }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (  
    <div 
      className={`project-left-card-container ${isVisible ? 'visible' : ''} ${isHovered ? 'expanded' : ''}`}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="project-left-background-3"></div>
        <div className="project-left-background-2"></div>
        <div className="project-left-background-1">
          <div className="project-card-content">
            <span className="project-card-title">{children}</span>
            {isHovered && (
              <div className="project-card-expanded project-card-expanded-left">
                <div className="project-card-expanded-content">
                  {image && (
                    <div className="project-card-image project-card-image-left">
                      <img src={image} alt={children} />
                    </div>
                  )}
                  <div className="project-card-text-content">
                    {description && (
                      <p className="project-card-description">{description}</p>
                    )}
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default ProjectCardLeft;
