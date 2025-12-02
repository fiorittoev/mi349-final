import ProjectCardLeft from '../components/ProjectCardLeft';
import ProjectCardRight from '../components/ProjectCardRight';

function Projects() {
  return (
    <div className="page projects-page">
      <div className="page-content">
        <ProjectCardLeft>
          thereMINI
        </ProjectCardLeft>
        <ProjectCardRight>
          velocIT
        </ProjectCardRight>
      </div>
    </div>
  );
}

export default Projects;
