import React from 'react';
import EmailForm from './EmailForm/EmailForm';
import'./emailModal.css'

const EmailModal = ({ closeModal }) => {


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h1 className="text-4xl font-bold text-center mb-8">Enviar Correo</h1>
      <h1 className="text-1xl font-bold text-center mb-8">Formulario</h1>
    <EmailForm/>
        <button  className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none" name="open-form-email" type="button" onClick={closeModal}>
          Salir
        </button>
     
    </div>
  );
};

export default EmailModal;
