import React from 'react';
import './aboutMe.css'
import FadeInOut from '../../FadeOutOnExit/FadeOutOnExit';
import TechnologiesRow from './TechnologiesRow/TechnologiesRow';

const AboutMe = () => {
  return (
    // Sección de "Acerca de mí"
    <FadeInOut>
    <section className="py-7">
      <div className="max-w-2xl mx-auto">
        {/* Foto */}
        <FadeInOut>
        <div className="flex justify-center">
          <img className="foto-perfil w-32 h-32 rounded-full border-4 border-indigo-600" src="https://i.ibb.co/zZ3K4qd/FotoMia.jpg" alt="Foto de perfil" />
        </div>
        </FadeInOut>
        {/* Card de presentación */}
        <FadeInOut>
        <div className="mt-4 p-7 bg-white shadow-lg rounded-lg card-presentacion">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">¡Hola!</h2>
          <p className="text-gray-600">
            Bienvenido/a a mi portafolio. Soy Everest Aguilar, un apasionado desarrollador fullstacker con experiencia en
            Astro, React, Angular, Express.js., .Net, Java, Javascript.
            Aquí encontrarás algunos de mis proyectos y trabajos destacados. Si tienes alguna pregunta o te gustaría
            colaborar, no dudes en contactarme.
          </p>
        </div>
        </FadeInOut>
      </div>
    </section>
    <TechnologiesRow/>
    </FadeInOut>
  );
};

export default AboutMe;
