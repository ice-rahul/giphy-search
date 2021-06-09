import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

function TextInput({
  className, datalist, inputType, onChange, placeholder,
}) {
  const [inputText, setInputText] = useState('');
  const handleInput = (event) => {
    setInputText(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <>
      <input className={`TextInput ${className || ''}`} value={inputText} onChange={handleInput} type={inputType} placeholder={placeholder} list="suggestions" />
      <datalist id="suggestions">
        {datalist.map((val) => (
          <option>{val}</option>
        ))}
      </datalist>
    </>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  datalist: PropTypes.arrayOf(PropTypes.string),
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  datalist: [],
  inputType: 'text',
  onChange: null,
  placeholder: 'Search for Gifs',
};

export default TextInput;
