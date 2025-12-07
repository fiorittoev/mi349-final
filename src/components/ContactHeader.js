import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import '../styles/contactheader.css';

function ContactHeader({ header, description, githubUrl, linkedinUrl }) {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <div className={`contact-header-container ${isVisible ? 'visible' : ''}`} ref={headerRef}>
            <div className="contact-header-background-3"></div>
            <div className="contact-header-background-2"></div>
            <div className="contact-header-background-1">
                {header && <h1 className="contact-header-title">{header}</h1>}
                {description && <p className="contact-header-description">{description}</p>}
                
                {(githubUrl || linkedinUrl) && (
                    <div className="contact-header-social-links">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-header-social-link"
                                title="GitHub"
                                aria-label="Visit GitHub profile"
                            >
                                <Github size={24} />
                            </a>
                        )}
                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-header-social-link"
                                title="LinkedIn"
                                aria-label="Visit LinkedIn profile"
                            >
                                <Linkedin size={24} />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactHeader;