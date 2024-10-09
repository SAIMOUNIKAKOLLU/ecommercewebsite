import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>Login/Signup</h2>
        <button onClick={onClose}>Close</button>
        {/* Add your login/signup form here */}
      </div>
    </div>,
    document.getElementById('modal-root') // This is where the modal will be rendered
  );
};

export default LoginModal;
