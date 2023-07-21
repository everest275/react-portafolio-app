import React, { useRef, useEffect, useState } from 'react';
import './fadeOutOnExit.css'; // Importa el archivo CSS con las animaciones

const FadeInOut = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentContainerRef = containerRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
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
