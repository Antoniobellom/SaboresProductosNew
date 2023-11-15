import React from 'react'
import "./Modal.css";

const ModalRegiones = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose}>Cerrar</button>
          {children}
        </div>
      </div>
    );
  };

export default ModalRegiones
