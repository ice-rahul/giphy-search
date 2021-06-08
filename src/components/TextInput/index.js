import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

function TextInput({ className, inputType, placeholder }) {
  return (
    <input className={`TextInput ${className || ''}`} type={inputType} placeholder={placeholder} />
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  inputType: 'text',
  placeholder: 'Search for Gifs',
};

export default TextInput;
