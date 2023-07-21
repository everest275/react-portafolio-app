import React from 'react';
import { FaPhone, FaHome, FaEnvelope } from 'react-icons/fa';
import FadeInOut from '../../../FadeOutOnExit/FadeOutOnExit';

const ContactCard = () => {
  return (
    <FadeInOut>
    <div className="m-4 p-5 rounded-lg shadow-md">
      
    <div className="flex justify-center items-center">
      <div className="flex items-center mb-4">
        <FaPhone className="text-indigo-600 text-xl mr-2" />
        <span className="text-gray-900">(+506) 8875-1242</span>
      </div>
      </div>

      <div className="flex justify-center items-center">
      <div className="flex items-center mb-4">
        <FaHome className="text-indigo-600 text-xl mr-2" />
        <span className="text-gray-900">San José, Costa Rica</span>
      </div>
      </div>

      <div className="flex justify-center items-center">
      <div className="flex items-center">
        <FaEnvelope className="text-indigo-600 text-xl mr-2" />
        <span className="text-gray-900">everest012016@gmail.com</span>
      </div>
      </div>
     
    </div>
    </FadeInOut>
  );
};

export default ContactCard;
