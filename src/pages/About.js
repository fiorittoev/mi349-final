import AboutCard from '../components/AboutCard.js';
import Skills from '../components/Skills.js';

function About({ header = "about me", description }) {
  return (
    <div className="page about-page">
      <div className="page-content">
        <AboutCard header={header} description={description} />
        <Skills />
      </div>
    </div>
  );
}

export default About;
