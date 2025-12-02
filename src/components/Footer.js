import{ useEffect, useState } from 'react';

function Footer() {
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
    <footer className={`footer ${showFooter ? "footer-visible" : ""}`}>
      <div className="footer-content">
        <p>&copy; {currentYear} Evan Fioritto. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/fiorittoev">Github</a>
          <a href="https://www.linkedin.com/in/evanfioritto/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
