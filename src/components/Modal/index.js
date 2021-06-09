import React, { useState, useEffect } from 'react';
import './Modal.scss';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import { Share } from 'components';
import PropTypes from 'prop-types';

function Modal({ link, modal, onClose }) {
  const [display, setDisplay] = useState(modal ? '' : 'none');
  const handleClose = () => {
    setDisplay('none');
    if (onClose) {
      onClose();
    }
  };
  useEffect(() => {
    setDisplay(modal ? '' : 'none');
  }, [modal]);
  return (
    <div className="Modal" style={{ display }}>
      <div className="modal-container">
        <div className="modal-header">
          <span className="border-left-4px font-bold pl-10px">Share with &#10084;</span>
          <span
            className="cursor-pointer modal-close"
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
            onClick={handleClose}
          >
            <CloseIcon width="24" height="24" />
          </span>
        </div>
        <div className="mt-20px">
          <Share url={link} />
        </div>
        <div className="mt-20px text-center">
          Share Giphy on your preferred apps and make the world animated
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  modal: PropTypes.bool,
  link: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  modal: false,
  link: '',
  onClose: null,
};

export default Modal;
