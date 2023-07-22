import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './emailForm.css'
import Modal from 'react-modal'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';


const EmailForm = () => {

  

  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRecaptchaVerify = (response) => {
    setIsVerified(true);
  };


  const handleRecaptchaExpired = () => {
    setIsVerified(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isVerified) {
      // Envía el correo usando EmailJS
      const templateParams = {
        from_name: email,
        message: message,
        to_name:'everest012016@gmail.com'
      };
      emailjs.send('Josuenito01', 'template_i0pvfrr', templateParams, 'faSPmIB60RqFOXbXc')
        .then((result) => {
          console.log(result)
          openConfirmationModal(true);
          window.location.href="/"
          
          
        }, (error) => {
          console.log(error)
          openConfirmationModal(false);
          
        });
    } else {
      openConfirmationModal(false);
    }
    
  };

    const customRecaptchaContainerStyle = {
      width: '100px', // Ancho deseado del contenedor del ReCAPTCHA
      height: '100px', // Altura deseada del contenedor del ReCAPTCHA
      marginLeft:'-30px'
    };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const openConfirmationModal = (success) => {
    setIsSuccess(success);
    setIsConfirmationOpen(true);
    
  };

  const closeConfirmationModal = () => {
    setIsConfirmationOpen(false);
    
  };

 const handleConfirmationAcept =(e)=>{
   e.preventDefault();
   if(isSuccess){
window.location.href="/"
   }else{
closeConfirmationModal()
   }


  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 px-4">
       
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ resize: 'none' }}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <ReCAPTCHA style={customRecaptchaContainerStyle}
            sitekey="6LdaczwnAAAAAK3AjmOKcCw1WeHwRfeAkbMjS8cS"
            onChange={handleRecaptchaVerify}
            onExpired={handleRecaptchaExpired}
          />
        </div>
        <div className="flex items-center justify-center">
        <button
          type="submit" name="submit-form-email"
          className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Enviar
        </button>
    </div>
        
      </form>
      <Modal
        isOpen={isConfirmationOpen}
        onRequestClose={closeConfirmationModal}
        contentLabel="Confirmación"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9999,
          },
          content: {
            maxWidth: '300px',
            margin: 'auto',
            border: 'none',
            overflowY:'hidden',
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            maxHeight:'200px'
          },
        }}
      >
        {isSuccess ? (
          <>
            <FaCheckCircle size={40} color="green" />
            <h2>¡Éxito!</h2>
            <p>El formulario ha sido enviado correctamente.</p>
            
           
          </>
        ) : (
          <>
            <FaExclamationCircle size={40} color="red" />
            <h2>Error</h2>
            <p>Ha ocurrido un error al enviar el formulario.</p>
            <div className="flex items-center justify-center">
        <button onClick={(e)=>{handleConfirmationAcept(e)}}
          type="button"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none"
        >
            Aceptar
        </button>
    </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default EmailForm;
