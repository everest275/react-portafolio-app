import React from 'react';
import FadeInOut from '../../../FadeOutOnExit/FadeOutOnExit'
import { AiOutlineCode } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ imageSrc, projectName, technologies,detalle, fecha_lanzamiento, github, url }) => {
  return (
    <FadeInOut>
    <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg bg-white">
      <div className="h-48">
        <img className="top-0 left-0 w-full h-full object-cover" src={imageSrc} alt={projectName} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-gray-900 text-xl mb-2">{projectName}</div>
        <p className="text-gray-700 text-base">
          {technologies}
        </p>
        <br/>
        <p className="text-gray-700 text-base">
          {detalle}
        </p>
        <br/>
        <p className="text-gray-700 text-base">
          {fecha_lanzamiento}
        </p>
        
        
        <br/>
        <div className="flex justify-center">
        <a href={github} className="mr-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
        <AiOutlineCode className="inline-block mr-2" /> Obtener Código
      </a>
      <a href={url} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">
        <FiExternalLink className="inline-block mr-2" /> Ver Sitio
      </a>
    </div>
      </div>
    </div>
    </FadeInOut>
  );
};

export default ProjectCard;
