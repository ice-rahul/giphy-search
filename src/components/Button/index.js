import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({
  buttonColor, className, onClick, text, textColor,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <input type="button" onClick={handleClick} style={{ color: textColor || '', backgroundColor: buttonColor || '' }} className={`Button ${className || ''}`} value={text} />
  );
}

Button.propTypes = {
  buttonColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  buttonColor: '',
  className: '',
  onClick: null,
  text: 'Search',
  textColor: '',
};

export default Button;
