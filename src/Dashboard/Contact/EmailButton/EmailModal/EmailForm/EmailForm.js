import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './emailForm.css'
import EmailConfirmation from './EmailConfirmation/EmailConfirmation';



const EmailForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [clickeado, setClickeado] = useState("");

  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRecaptchaVerify = (response) => {
    setIsVerified(true);
  };
  const handleAceptAndClose=()=>{
    setShowSuccessModal(false)
    window.location.href='/'
  }

  const handleRecaptchaExpired = () => {
    setIsVerified(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickeado('clickeado')
    if (isVerified) {
      // Envía el correo usando EmailJS
      const templateParams = {
        from_name: email,
        message: message,
        to_name:'everest012016@gmail.com'
      };
      emailjs.send('Josuenito01', 'template_i0pvfrr', templateParams, 'faSPmIB60RqFOXbXc')
        .then((result) => {
          setShowSuccessModal(true);
          
          
        }, (error) => {
          setShowErrorModal(true);
        });
    } else {
      setShowErrorModal(true);
    }
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 px-4">
       
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
          <ReCAPTCHA
            sitekey="6LdaczwnAAAAAK3AjmOKcCw1WeHwRfeAkbMjS8cS"
            onChange={handleRecaptchaVerify}
            onExpired={handleRecaptchaExpired}
          />
        </div>
        <button
          type="submit" name="submit-form-email"
          className={clickeado+" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"}
        >
          Enviar
        </button>
      </form>
            {/* Modal de éxito */}
            <EmailConfirmation
        isOpen={showSuccessModal}
        title="Correo enviado con éxito"
        message="¡El correo se ha enviado correctamente!"
        icon="success"
        onClose={() => handleAceptAndClose() }
      />

      {/* Modal de error */}
      <EmailConfirmation
        isOpen={showErrorModal}
        title="Error al enviar el correo"
        message="Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde."
        icon="error"
        onClose={() => setShowErrorModal(false)}
      />

    </div>
  );
};

export default EmailForm;
