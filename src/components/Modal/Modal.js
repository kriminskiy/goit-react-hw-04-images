import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
export default Modal;
