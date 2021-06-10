const getRelatedURL = (query) => {
  if (!query) return '';
  return `${process.env.REACT_APP_API_BASE_URL_TAGE}/related/${query || ''}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
};

export default getRelatedURL;
