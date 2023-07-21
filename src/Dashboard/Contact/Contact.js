import React from 'react';
import SocialMedia from './SocialMedia/SocialMedia'
import ContactCard from './ContactCard/ContactCard';
import FadeInOut from '../../FadeOutOnExit/FadeOutOnExit';
import EmailButtonOpen from './EmailButton/EmailButtonOpen'
const Contact = () => {
  return (
    <FadeInOut>
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact me</h1>
      <EmailButtonOpen/>
      
     <ContactCard/>
    
      <SocialMedia/>
    </div>
    </FadeInOut>
  );
};

export default Contact;
