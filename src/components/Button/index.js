import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({
  buttonColor, className, text, textColor,
}) {
  return (
    <input type="button" style={{ color: textColor || '', backgroundColor: buttonColor || '' }} className={`Button ${className || ''}`} value={text} />
  );
}

Button.propTypes = {
  buttonColor: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  buttonColor: '',
  className: '',
  text: 'Search',
  textColor: '',
};

export default Button;
