import { useEffect, useRef, useState, useCallback } from 'react';
import './../styles/skills.css';

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++/C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original-wordmark.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' }
];

// Calculate circular positions
const getCircularPosition = (index, total, radius) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius
  };
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const bubbleRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const updateBubblePositions = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePos.current;

    bubbleRefs.current.forEach((bubble, index) => {
      if (!bubble) return;

      const isHovered = index === hoveredIndex;
      
      // When hovered, lock to original position
      if (isHovered) {
        bubble.style.setProperty('--repel-x', '0px');
        bubble.style.setProperty('--repel-y', '0px');
        return;
      }

      const bubbleRect = bubble.getBoundingClientRect();
      const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2 - rect.left;
      const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2 - rect.top;
      
      const dx = x - bubbleCenterX;
      const dy = y - bubbleCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 120;
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        const repelX = -Math.cos(angle) * force * 15;
        const repelY = -Math.sin(angle) * force * 15;
        
        bubble.style.setProperty('--repel-x', `${repelX}px`);
        bubble.style.setProperty('--repel-y', `${repelY}px`);
      } else {
        const currentX = parseFloat(bubble.style.getPropertyValue('--repel-x')) || 0;
        const currentY = parseFloat(bubble.style.getPropertyValue('--repel-y')) || 0;
        const newX = currentX * 0.85;
        const newY = currentY * 0.85;
        
        if (Math.abs(newX) < 0.1 && Math.abs(newY) < 0.1) {
          bubble.style.setProperty('--repel-x', '0px');
          bubble.style.setProperty('--repel-y', '0px');
        } else {
          bubble.style.setProperty('--repel-x', `${newX}px`);
          bubble.style.setProperty('--repel-y', `${newY}px`);
        }
      }
    });
  }, [hoveredIndex]);

  useEffect(() => {
    let rafId = null;

    const animate = () => {
      updateBubblePositions();
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    animationFrameRef.current = rafId;

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateBubblePositions]);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, []);

  const handleMouseEnter = useCallback((skill, index) => {
    setHoveredSkill(skill.name);
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSkill(null);
    setHoveredIndex(null);
  }, []);

  return (
    <div 
      className="skills-container" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <h2 className="skills-header">Skills</h2>
      <div className="skills-bubbles">
        {hoveredSkill && (
          <div className="skill-name-center">
            {hoveredSkill}
          </div>
        )}
        {skills.map((skill, index) => {
          const pos = getCircularPosition(index, skills.length, 130);
          return (
            <div
              key={skill.name}
              ref={el => bubbleRefs.current[index] = el}
              className="skill-bubble"
              style={{ 
                '--index': index,
                '--base-x': `${pos.x}px`,
                '--base-y': `${pos.y}px`
              }}
              onMouseEnter={() => handleMouseEnter(skill, index)}
              onMouseLeave={handleMouseLeave}
              aria-label={skill.name}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="skill-icon"
                draggable="false"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;