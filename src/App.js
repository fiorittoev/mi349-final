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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
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
