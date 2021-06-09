import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ShareIcon } from 'assets/images/share.svg';

import './ImageContainer.scss';

function ImageContainer({
  className, url, linkTo, onShare,
}) {
  const history = useHistory();
  const handleShare = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (onShare) {
      onShare(linkTo);
    } else {
      history.push(linkTo);
    }
  };
  const handleDetails = (event) => {
    event.preventDefault();
    history.push(linkTo);
  };
  return (
    <div aria-hidden="true" className="position-relative" onClick={handleDetails}>
      <img src={url} alt={url} className={`ImageContainer cursor-pointer ${className || ''}`} />
      <ShareIcon onClick={handleShare} width="24" height="24" className="bg-white border-radius-10px cursor-pointer padding-10px position-absolute right-15px svg top-15px" />
    </div>
  );
}

ImageContainer.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  onShare: PropTypes.func,
  url: PropTypes.string,
};

ImageContainer.defaultProps = {
  className: '',
  linkTo: '',
  onShare: null,
  url: '',
};

export default ImageContainer;
