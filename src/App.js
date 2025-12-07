import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Gradientdiv from "./components/Gradientdiv";
import CustomCursor from './components/CustomCursor';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) setIsDarkMode(JSON.parse(savedMode));
  }, []);

  return (
    <Router>
      <Gradientdiv className ="app-gradient-background">
        <div className="app-container">
          <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home 
                header="hi, i'm evan"
                description="welcome to my portfolio! i am a software engineer, feel free to reach out!"
              />} />
              <Route path="/about" element={<About 
                header="about me"
                description="learn more about my background!"
              />} />
              <Route path="/contact" element={<Contact 
                header="contact"
                description="get in touch!"
              />} />
              <Route path="/projects" element={<Projects 
                header="projects"
                description="some of my recent work and projects!"
              />} />
              <Route path="*" element={<NotFound 
                header="404 - Page Not Found"
                description="The page you're looking for doesn't exist. Let's get you back on track."
              />} />
            </Routes>
          </main>
          <Footer isDarkMode={isDarkMode}/>
        </div>
        <CustomCursor />
      </Gradientdiv>
    </Router>
  );
}

export default App;
