import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as HomeLight } from '../assets/home.svg';
import { ReactComponent as HomeLightHover } from '../assets/home-hover.svg';
import { ReactComponent as HomeDark } from '../assets/home-dark.svg';
import { ReactComponent as HomeDarkHover } from '../assets/home-dark-hover.svg';

import { ReactComponent as ViewLight } from '../assets/viewmode.svg';
import { ReactComponent as ViewLightHover } from '../assets/viewmode-hover.svg';
import { ReactComponent as ViewDark } from '../assets/viewmode-dark.svg';
import { ReactComponent as ViewDarkHover } from '../assets/viewmode-dark-hover.svg';

function Navigation({ isDarkMode, setIsDarkMode }) {
  const location = useLocation();
  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
      applyDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const applyDarkMode = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--primary-color-light', 'var(--primary-color-dark)');
      root.style.setProperty('--secondary-color-light', 'var(--secondary-color-dark)');
      root.style.setProperty('--tertiary-color-light', 'var(--tertiary-color-dark)');
      root.style.setProperty('--background-color-light', 'var(--background-color-dark)');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#DCFDD1';
    } else {
      root.style.setProperty('--primary-color-light', '#573280');
      root.style.setProperty('--secondary-color-light', '#23022E');
      root.style.setProperty('--tertiary-color-light', '#ADA8B6');
      root.style.setProperty('--background-color-light', '#FFFFFF');
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#000000';
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    applyDarkMode(newMode);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navigation">

      <ul className="nav-list">
        <li>
          <Link 
            to="/" 
            className={`nav-link nav-icon-link home-link ${isActive('/')}`}
          >
            {isDarkMode ? (
              <>
                <HomeDark className="home-icon default-icon" />
                <HomeDarkHover className="home-icon hover-icon" />
              </>
            ) : (
              <>
                <HomeLight className="home-icon default-icon" />
                <HomeLightHover className="home-icon hover-icon" />
              </>
            )}
          </Link>

        </li>
        <li>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            about
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>
            projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            contact
          </Link>
        </li>
      </ul>

       <button
        className="viewmode-toggle viewmode-link"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <>
            <ViewDark className="viewmode-icon default-icon" />
            <ViewDarkHover className="viewmode-icon hover-icon" />
          </>
        ) : (
          <>
            <ViewLight className="viewmode-icon default-icon" />
            <ViewLightHover className="viewmode-icon hover-icon" />
          </>
        )}
      </button>

    </nav>
  );
}

export default Navigation;