import React, { useState, useEffect } from "react";

function GradientDiv({ children, className }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    const handleScroll = () => {
      setScrollOffset({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientX = mousePosition.x + scrollOffset.x;
  const gradientY = mousePosition.y + scrollOffset.y;

  return (
    <div
      className={className}
      style={{
        backgroundImage: `radial-gradient(circle at ${gradientX}px ${gradientY}px, 
          var(--primary-color-light) 0%,
          var(--background-color-light) 10%)`,
      }}
    >
      {children}
    </div>
  );
}

export default GradientDiv;
