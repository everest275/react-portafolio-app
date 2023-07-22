import React, { useState } from 'react';
import Modal from 'react-modal';
import EmailModal from './EmailModal/EmailModal';


// Identifica el elemento raíz de tu aplicación
const appRootElement = document.getElementById('root');

// Llama a setAppElement para evitar el aviso de accesibilidad
Modal.setAppElement(appRootElement);

const EmailButtonOpen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

   // Estilo para cambiar el tamaño del Modal
   const customModalStyle = {
    overlay: {
      background:"#f8f4ff",
      zIndex: 9999, // Asegurarse de que el Modal esté en la parte superior
    },
    content: {
      overflowY:'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 'none', // Sin bordes
     
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div>
      <div className="flex justify-center items-center">
      <button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={openModal}>Enviarme un mensaje</button>
      </div>
      <Modal
        style={customModalStyle}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario de Envío de Correo"
      >
        <EmailModal closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default EmailButtonOpen;