import React, { useState } from 'react';
import Modal from 'react-modal';
import EmailModal from './EmailModal/EmailModal';

const EmailButtonOpen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div class="flex justify-center items-center">
      <button  class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={openModal}>Enviarme un mensaje</button>
      </div>
      <Modal
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