import React from 'react';
import { FaReact, FaAngular, FaNodeJs, FaServer, FaDotCircle } from 'react-icons/fa';
import 'animate.css';
import './technologiesRow.css'
import FadeInOut from '../../../FadeOutOnExit/FadeOutOnExit';

const TechnologiesRow = () => {
  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <FaServer /> },
    { name: '.NET', icon: <FaDotCircle /> },
    // Agrega más tecnologías según sea necesario
  ];

  return (
    <FadeInOut>
     
    <div className="technologies-row">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`technology-item animate__animated animate__fadeInUp animate__delay-${index}s`}
        >
          <div className="icon">{tech.icon}</div>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
    
    </FadeInOut>
  );
};

export default TechnologiesRow;
