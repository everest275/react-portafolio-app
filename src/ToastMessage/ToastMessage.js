import React from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import Modal from 'react-modal';

const MessageModal = ({ isOpen, message, type, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="content">
        {type === 'success' ? (
          <MdCheckCircle className="icon success" />
        ) : (
          <MdError className="icon error" />
        )}
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default MessageModal;
