import React, { useRef, useEffect, useState } from 'react';
import './fadeOutOnExit.css'; // Importa el archivo CSS con las animaciones

const FadeInOut = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`fade-in-out ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInOut;
