import React from 'react';
import LoadingIcon from 'assets/images/loading.gif';

function Loading() {
  return (
    <div className="d-flex align-center justify-center flex-column">
      <img src={LoadingIcon} alt="Loading" />
      <span className="font-bold">Your Data is getting prepared</span>
    </div>
  );
}

export default Loading;
