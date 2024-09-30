import PropTypes from "prop-types"; // Importă PropTypes
import "../../styling/Modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const handleClickOutside = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// Adaugă validarea propTypes
Modal.propTypes = {
  show: PropTypes.bool.isRequired, // `show` este un boolean și este obligatoriu
  onClose: PropTypes.func.isRequired, // `onClose` este o funcție și este obligatoriu
  children: PropTypes.node, // `children` poate fi orice element valid React
};

export default Modal;