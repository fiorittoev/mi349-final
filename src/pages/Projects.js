import ProjectCardLeft from '../components/ProjectCardLeft';
import ProjectCardRight from '../components/ProjectCardRight';

function Projects({ header, description }) {
  return (
    <div className="page projects-page">
      <div className="page-content">
        {(header || description) && (
          <div className="page-header">
            {header && <h1 className="page-header-title">{header}</h1>}
            {description && <p className="page-header-description">{description}</p>}
          </div>
        )}
        <ProjectCardLeft
          description="An immersive virtual reality language learning application that helps users practice speaking and listening skills in a realistic, interactive environment. Features real-time pronunciation feedback and cultural context lessons."
          image="http://www.capstone.cse.msu.edu/2025-08/projects/launch/images/thumbnails/artwork-1.png"
          link="http://www.capstone.cse.msu.edu/2025-08/projects/launch/"
        >
          my VR Language Tutor
        </ProjectCardLeft>
        <ProjectCardRight
          description="Winner at Spartahack X
                      Designed and implemented an accessible, motion-based MIDI controller using the FREE-WILi device, enabling intuitive one-handed music creation through hand gestures.
                      Developed a real-time sensor-to-MIDI pipeline by processing accelerometer data with C++, C, and Python, sending through serial data and integrating it with loopMIDI and DAWs like Ableton."
          image="https://media.licdn.com/dms/image/sync/v2/D5627AQFXPKNn1Flfbg/articleshare-shrink_160/articleshare-shrink_160/0/1738598114539?e=1765742400&v=beta&t=uSgCjiKJ_C11QCssITQ1tjBDCM5iyZ686LOvp8WZFbA"
          link="https://devpost.com/software/theremini"
        >
          thereMINI
        </ProjectCardRight>
        <ProjectCardLeft
          description="Developed at MHacks 2024
                        Developed a React Native application using Expo and Firebase to enhance career fair networking through geolocation-based recruiter discovery.
                        Integrated Groq AI to generate personalized conversation starters and career insights, improving user engagement and follow-up actions."
          image="https://media.licdn.com/dms/image/sync/v2/D5627AQFlD9vG0QqPoQ/articleshare-shrink_160/articleshare-shrink_160/0/1728944377157?e=1765742400&v=beta&t=gAJfGx3794gd7a_85wecsLh5m4y0yyKKVE9eiyEduzQ"
          link="hhttps://devpost.com/software/velocit"
        >
          velocIT
        </ProjectCardLeft>
      </div>
    </div>
  );
}

export default Projects;
