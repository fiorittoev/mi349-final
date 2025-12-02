import{ useEffect, useState } from 'react';

import { ReactComponent as GithubLight } from '../assets/github.svg';
import { ReactComponent as GithubDark } from '../assets/github-dark.svg';
import { ReactComponent as GithubLightHover } from '../assets/github-hover.svg';
import { ReactComponent as GithubDarkHover } from '../assets/github-dark-hover.svg';
import { ReactComponent as LinkedinLight } from '../assets/linkedin.svg';
import { ReactComponent as LinkedinHover } from '../assets/linkedin-hover.svg';
import { ReactComponent as LinkedinDark } from '../assets/linkedin-dark.svg';
import { ReactComponent as LinkedinDarkHover } from '../assets/linkedin-dark-hover.svg';


function Footer({ isDarkMode }) {
  const [showFooter, setShowFooter] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      setShowFooter(scrollPosition >= pageHeight - 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? "footer-visible" : ""} ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="footer-content">
        <p>&copy; {currentYear} Evan Fioritto. All rights reserved.</p>
        <div className="footer-links">
          
          <a href="https://github.com/fiorittoev">
            {isDarkMode ? (
              <>
                <GithubDark className="viewmode-icon default-icon" />
                <GithubDarkHover className="viewmode-icon hover-icon" />
              </>
            ) : (
              <>
                <GithubLight className="viewmode-icon default-icon" />
                <GithubLightHover className="viewmode-icon hover-icon" />
              </>
            )}
          </a>
          <a href="https://www.linkedin.com/in/evanfioritto/">
            {isDarkMode ? (
              <>
                <LinkedinDark className="viewmode-icon default-icon" />
                <LinkedinDarkHover className="viewmode-icon hover-icon" />
              </>
            ) : (
              <>
                <LinkedinLight className="viewmode-icon default-icon" />
                <LinkedinHover className="viewmode-icon hover-icon" />
              </>
            )}
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
