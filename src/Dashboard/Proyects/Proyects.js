import React from 'react';
import ProjectCard from './ProyectCard/ProyectCard';
import FadeInOut from '../../FadeOutOnExit/FadeOutOnExit';


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageSrc:"https://i.postimg.cc/9QPDhdTN/presentacion.png",
      projectName: "Sitio de Presentacion",
      technologies: "Javascript, CSS, HTML",
      fecha_lanzamiento: "Enero-2022",
      detalle: "Primer proyecto de mi carrera basado en mi atracción por el cosmos y el universo y también en un poco de como soy.",
      github: "https://github.com/everest275/mysite",
      url: "https://everest-dev-757422.netlify.app/"
    },
    {
      id: 2,
      imageSrc:"https://i.postimg.cc/MTVJjDDy/airportshuttlecr-com.png",
      projectName: "AirportShuttleCr.Com",
      technologies: "Astro, React, Tailwind CSS, CSS",
      fecha_lanzamiento: "Marzo-2023",
      detalle: "Primer proyecto de paga, se realizó con el fin de atraer más clientes extranjeros a una empresa de tranporte turístico en Costa Rica.",
      github: "https://github.com/everest275/airportshuttle-landing",
      url: "https://airportshuttlecr.com/"
    },
    {
      id: 3,
      imageSrc:"https://i.postimg.cc/nr9ZTxpQ/portafolio.png",
      projectName: "Portafolio",
      technologies: "React, Tailwind CSS, CSS, Animate.js, Gsap",
      fecha_lanzamiento: "Julio-2023",
      detalle: "Sitio web de presentacion profesional personal para muestra de proyectos y contacto con mi persona.",
      github: "/",
      url: "/"
    }
    // Agrega más objetos para más proyectos
  ];

  return (
    <FadeInOut>
    <div className="container mx-auto p-4 proyectos-contenedor">
      <h1 className="text-4xl font-bold text-black text-center mb-8">Mis Proyectos</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            projectName={project.projectName}
            technologies={project.technologies}
            fecha_lanzamiento={project.fecha_lanzamiento}
            detalle={project.detalle}
            github={project.github}
            url={project.url}
          />
        ))}
      </div>
    </div>
    </FadeInOut>
  );
};

export default Projects;
