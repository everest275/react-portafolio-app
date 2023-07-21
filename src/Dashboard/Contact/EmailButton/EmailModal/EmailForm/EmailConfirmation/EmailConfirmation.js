import React from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import Modal from 'react-modal';

// Estilos del modal (usando tailwind-css)
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

const EmailConfirmation = ({ isOpen, title, message, icon, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="flex items-center mb-4">
        {icon === 'success' ? (
          <MdCheckCircle className="text-green-500 mr-2 text-3xl" />
        ) : (
          <MdError className="text-red-500 mr-2 text-3xl" />
        )}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p>{message}</p>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default EmailConfirmation;
