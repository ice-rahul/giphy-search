import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getSuggestionURL from 'utils/getSuggestionURL';
import getRelatedURL from 'utils/getRelatedURL';
import debounce from 'utils/debounce';
import './TextInput.scss';

function TextInput({
  className, getDataList, inputType, onChange, placeholder,
}) {
  const [datalist, setDataList] = useState([]);
  async function getSuggestions(value) {
    const response = await fetch(getSuggestionURL(value, 0));
    const { data: suggestions } = await response.json();
    let related = [];
    if (getRelatedURL(value)) {
      const relatedResponse = await fetch(getRelatedURL(value));
      const { data } = await relatedResponse.json();
      related = data;
    }
    setDataList([...related, ...suggestions]);
  }

  const [inputText, setInputText] = useState('');
  const getSuggestionsBetter = React.useCallback(debounce(getDataList || getSuggestions, 400), []);
  const handleInput = (event) => {
    setInputText(event.target.value);
    getSuggestionsBetter(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <>
      <input
        className={`TextInput ${className || ''}`}
        value={inputText}
        onChange={handleInput}
        type={inputType}
        placeholder={placeholder}
        list="suggestions"
      />
      <datalist id="suggestions">
        {datalist.map((val) => (
          <option key={`${val.name} ${val.analytics_response_payload}`}>{val.name}</option>
        ))}
      </datalist>
    </>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  getDataList: PropTypes.func,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  getDataList: null,
  inputType: 'text',
  onChange: null,
  placeholder: 'Search for Gifs',
};

export default TextInput;
